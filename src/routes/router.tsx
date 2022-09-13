import { Route, BrowserRouter, Routes } from "react-router-dom";
import PrivateRoutes from "../component/common/PrivateRoutes";
import Dashboard from "../containers/dashboard/Dashboard";
import SignIn from "../containers/signin/SignIn";
import SignUp from "../containers/signup/SignUp";

const Routers = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
