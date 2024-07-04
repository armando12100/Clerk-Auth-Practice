import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import axios from "axios";

export const FinancialRecordForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const { user } = useUser();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/finance");
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

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
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            required
            className="ml-2 bg-slate-900 rounded-md"
            value={description}
            name="input-text-description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            required
            className="ml-2 bg-slate-900 rounded-md"
            value={amount}
            name="input-text-amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="category">Category:</label>
          <select
            name="select-category"
            id="category"
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
          <label htmlFor="payment-method">Payment Method:</label>
          <select
            name="select-payment-method"
            id="payment-method"
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
          <Link to={"/finances"}>
            <button
              className="bg-slate-900 rounded-md hover:border-white border-slate-500 border-2
            cursor-pointer px-2 py-1"
            >
              Financial Records
            </button>
          </Link>
        </div>
      </form>
      <div className="pl-4 flex justify-center">
        {userData.map((users) => (
          <div
            key={users.id}
            className="border-2 border-gray-700 flex flex-col text-center px-4 mr-8 rounded-lg mt-10"
          >
            <h1>{users.description}</h1>
            <p className="">{users.category}</p>
            <h2 className="font-bold">{users.amount}</h2>
            <p>{users.date.slice(0,10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
