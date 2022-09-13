import { useEffect } from "react";
import { AppWrapper } from "./App.style";
import Routers from "./routes/router";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("currentUserId") === null) {
      navigate("/signIn");
      return;
    }
  }, []);
  return (
    <AppWrapper>
      <Routers />
    </AppWrapper>
  );
}

export default App;
