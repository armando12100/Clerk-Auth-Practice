import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      userID: user?.id,
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };

    // addRecord(newRecord);
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };

  return (
    <div className="text-white font-bold">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="">Description:</label>
          <input
            type="text"
            required
            className="ml-2 bg-slate-900 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Amount:</label>
          <input
            type="number"
            required
            className="ml-2 bg-slate-900 rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Category:</label>
          <select
            name=""
            id=""
            required
            className="ml-2 bg-slate-900 rounded-md px-5"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="">Food</option>
            <option value="">Rent</option>
            <option value="">Salary</option>
            <option value="">Utilities</option>
            <option value="">Entertainment</option>
            <option value="">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Payment Method:</label>
          <select
            name=""
            id=""
            required
            className="ml-2 bg-slate-900 rounded-md px-5"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="bg-slate-900 rounded-md hover:border-white border-slate-500 border-2
                cursor-pointer px-2 py-1 mr-2"
          >
            Add Record
          </button>
          <Link to={'/finances'}>
            <button
              className="bg-slate-900 rounded-md hover:border-white border-slate-500 border-2
            cursor-pointer px-2 py-1"
            >
              Financial Records
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
