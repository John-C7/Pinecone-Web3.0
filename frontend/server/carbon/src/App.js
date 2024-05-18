import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/Login/LoginPage";
import { RegisterPage } from "./components/Register/RegisterPage";
import Landing from "./components/landing/landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Gemini from "./components/chatbot/chatbot";
import { TransactionPage } from "./components/Transactions/TransactionPage";
import Navbar3 from "./components/Navbar3/Navbar3";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  const showNavbar = !["/", "/login", "/register"].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar3 userId={1} />} {/*demo logged-in user's ID */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Gemini />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionPage />} />
      </Routes>
    </>
  );
};

export default App;
