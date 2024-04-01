import React from "react";
import Header from "../Header/Header";
import LoginScreenHeader from "../LoginScreen/LoginScreenHeader";

import styles from "./termos.module.css";

function TermosScreen() {
  return (
    <>
      <Header>
        <LoginScreenHeader />
      </Header>
      <div className={styles.termoContainer}>
        <h1>Termos da Prestação de Serviço</h1>
        <div className={styles.termoTextContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non
            quae aperiam eos incidunt nihil, vitae laborum quisquam dolorum
            fugit odio magni sequi reprehenderit, dolorem recusandae modi
            delectus. Fuga, possimus.
          </p>
        </div>
      </div>
    </>
  );
}

export default TermosScreen;
