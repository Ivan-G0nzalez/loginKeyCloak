import UserService from "../services/userServices";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

interface Iprops {
  children: JSX.Element;
}

function PrivateRoute({ children }: Iprops) {
  const navigate = useNavigate();
  const token = Cookies.get("Token");

  console.log(token);

  useEffect(() => {
    if (token === "undefined") {
      navigate("/auth");
    }
  }, []);
  return <div>{children}</div>;
}

export default PrivateRoute;
