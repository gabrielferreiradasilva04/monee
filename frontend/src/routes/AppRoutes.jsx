import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../components/context/AuthContext";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Overview from "../pages/Overview";
import FinancialGoal from "../pages/FinancialGoal";
import OpenFinance from "../pages/OpenFinance";
import Transactions from "../pages/Transactions";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import BankAccounts from "../pages/BankAccounts";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            {/*Rotas padrões protegidas*/}
            <Route path="overview" element={<Overview />}></Route>
            <Route path="bank-accounts" element={<BankAccounts />}></Route>
            <Route path="financial-goal" element={<FinancialGoal />}></Route>
            <Route path="open-finance" element={<OpenFinance />}></Route>
            <Route path="transactions" element={<Transactions />}></Route>
            <Route path="not-found" element={<NotFound />}></Route>
          </Route>
          <Route path="/" element={<AuthLayout />}>
            {/*rotas de autenticação*/}
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
