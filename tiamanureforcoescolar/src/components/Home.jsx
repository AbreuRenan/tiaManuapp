import React from "react";
import Header from "./Header/Header";
import UserHeader from "./UserScreen/UserHeader";
import UserScreen from "./UserScreen/UserScreen";
import { Route, Routes, useNavigate } from "react-router";
import UserFinance from "./UserScreen/UserFinance";
import { AppContext } from "../AppContext";
import Logout from "./LoginScreen/Logout";

function Home() {
  const { isLoggedIn, userData } = React.useContext(AppContext);
  const [isUser, setIsUser] = React.useState(false)
  const navigate = useNavigate();
  React.useEffect( ()=> {
    if(!isLoggedIn) navigate("/login");
    if(userData.password === "a") {
      return navigate('/admin')
    } else {
      return navigate('/user')
    }
  }, [])

  return <div>Home</div>
}

export default Home;
