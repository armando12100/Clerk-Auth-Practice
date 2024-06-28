import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'
import { FinancialRecordList } from './pages/dashboard/financial-record-list'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Dashboard />}/>
      <Route path="/auth" element={<Auth />}/>
      <Route path='/finances' element={<FinancialRecordList />}/>
    </>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}