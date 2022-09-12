import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "../containers/signin/SignIn";
import SignUp from "../containers/signup/SignUp";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
