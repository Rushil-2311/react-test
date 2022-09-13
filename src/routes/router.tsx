import { Route, Navigate, Routes } from "react-router-dom";
import Dashboard from "../containers/dashboard/Dashboard";
import SignIn from "../containers/signin/SignIn";
import SignUp from "../containers/signup/SignUp";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
