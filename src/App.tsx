import SignInPage from "./pages/SignIn/SignInPage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp/SignUpPage";
import DashboardPage from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
