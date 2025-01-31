import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordList } from "./pages/dashboard/financial-record-list";
import { FinanceProvider } from './contexts/financial-record-context';
import { FinancialRecordEdit } from "./pages/dashboard/financial-record-list-edit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        element={
          <FinanceProvider>
            <Dashboard />
          </FinanceProvider>
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route path="/finances" element={<FinancialRecordList />} />
      <Route path="/update/:id" element={<FinancialRecordEdit />}/>
    </>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
