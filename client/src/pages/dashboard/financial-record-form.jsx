import { useState } from "react";
// import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import axios from "axios";

export const FinancialRecordForm = () => {
  // const [description, setDescription] = useState("");
  // const [amount, setAmount] = useState("");
  // const [category, setCategory] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("");

  function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  const [finances, setFinances] = useState({
    date: formatDate(),
    description: "",
    amount: null,
    category: "",
    paymentMethod: "",
  });

  // const { user } = useUser();

  const handleChange = (e) => {
    setFinances((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(finances);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:3000/finance", finances)
      console.log("worked hehe")
    } catch (error) {
      console.log(error)
    }
  }

  //   const newRecord = {
  //     userID: user?.id,
  //     date: new Date(),
  //     description: description,
  //     amount: parseFloat(amount),
  //     category: category,
  //     paymentMethod: paymentMethod,
  //   };

  //   addRecord(newRecord);
  //   setDescription("");
  //   setAmount("");
  //   setCategory("");
  //   setPaymentMethod("");

  return (
    <div className="text-white font-bold">
      <form>
        <div className="mb-2">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            required
            className="ml-2 bg-slate-900 rounded-md"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            required
            className="ml-2 bg-slate-900 rounded-md"
            name="amount"
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            required
            className="ml-2 bg-slate-900 rounded-md px-5"
            onChange={handleChange}
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="payment-method">Payment Method:</label>
          <select
            name="paymentMethod"
            id="payment-method"
            required
            className="ml-2 bg-slate-900 rounded-md px-5"
            onChange={handleChange}
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
            onClick={handleSubmit}
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
    </div>
  );
};
