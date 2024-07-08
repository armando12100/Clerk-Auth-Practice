import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const FinancialRecordList = () => {
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

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div className="text-white font-bold">
        <h1>Record List</h1>
      </div>
      <div className="pl-4 flex justify-center text-white">
        {userData.map((users) => (
          <div key={users.userId}>
            <div className="border-2 border-gray-700 flex flex-col text-center px-4 mr-8 rounded-lg mt-10">
              <h1>Finance: {users.description}</h1>
              <p className="">Category: {users.category}</p>
              <h2 className="">Amount Spent: {users.amount}</h2>
              <p>Date: {users.date.slice(0, 10)}</p>
            </div>

            <div className="flex justify-center w-5/6">
              <button
                className="bg-slate-900 rounded-md hover:border-white border-slate-500 border-2
            cursor-pointer px-2 py-2 text-white mt-5 font-bold text-lg mr-1"
              >
                Edit
              </button>

              <button
                className="bg-slate-900 rounded-md hover:border-white border-slate-500 border-2
            cursor-pointer px-2 y-2 text-white mt-5 font-bold text-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/"}>
        <button
          className="bg-slate-900 rounded-md hover:border-white border-slate-500 border-2
            cursor-pointer px-8 py-2 text-white mt-10 font-bold text-2xl"
        >
          Home
        </button>
      </Link>
    </div>
  );
};
