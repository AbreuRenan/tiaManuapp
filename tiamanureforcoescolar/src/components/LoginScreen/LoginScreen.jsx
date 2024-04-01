import React from "react";

import styles from "./LoginScreen.module.css";
import Header from "../Header/Header";
import LoginScreenHeader from "./LoginScreenHeader";
import Input from "../helpers/Input";
import { AppContext } from "../../AppContext";
import { NavLink, useNavigate } from "react-router-dom";


function LoginScreen() {
  const {
    setIsLoading,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
  } = React.useContext(AppContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (formData.email && formData.password) {
      setUserData(formData)
      setIsLoggedIn(true)
    }
  }

  React.useEffect( ()=>{
    if(isLoggedIn) navigate('/')
  },[isLoggedIn])

  return (
    <>
      <Header>
        <LoginScreenHeader />
      </Header>
      <form className={styles.loginScreenInputGroup} onSubmit={handleSubmit}>
        <Input
          className={styles.loginScreenInputField}
          name="email"
          type="email"
          placeholder="login"
        />
        <Input
          className={styles.loginScreenInputField}
          name="password"
          type="password"
          placeholder="senha"
        />
        <button className={styles.loginScreenInputBtn}>Entrar</button>
      </form>
      <NavLink to="/termos" end className={styles.termosCondicoes}> Termos e Condições</NavLink>
    </>
  );
}

export default LoginScreen;
