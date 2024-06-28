import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

export const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-white text-3xl font-bold">
          Welcome {user?.firstName}! Here Are Your Finances:
        </h1>
      </div>

      <div className="pt-3">
        <FinancialRecordForm />
      </div>
    </div>
  );
};
