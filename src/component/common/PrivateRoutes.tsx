import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [currentUserInfo, setCurrentUserInfo] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("currentUserId") === null) {
      setCurrentUserInfo(false);
      return;
    }
    setCurrentUserInfo(true);
  }, []);
  return currentUserInfo ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
