import { useState, useEffect } from "react";
import axios from 'axios'

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
