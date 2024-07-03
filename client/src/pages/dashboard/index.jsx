import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { useContext } from "react";
import { FinanceContext } from "../../contexts/financial-record-context";

export const Dashboard = () => {
  const { user } = useUser();
  const {count, addCount} = useContext(FinanceContext);

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-white text-3xl font-bold">
          Welcome {user?.firstName}! Here Are Your Finances:
        </h1>
        <div className="text-white">
          {count}
        </div>
        <button onClick={()=>addCount()} className="text-white">Add</button>
      </div>

      <div className="pt-3">
        <FinancialRecordForm />
      </div>
    </div>
  );
};
