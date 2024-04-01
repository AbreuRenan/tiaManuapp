import React from "react";
import styles from "./userStyles.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import BackBtn from "../helpers/BackBtn";


function UserHeader() {
  const userPhotoSrc = "src/assets/amoraimg.png";
  return (
    <>
    <BackBtn/>
      <div className={styles.userHeaderContainer}>
        <div className={styles.userHeaderImgContainer}>
          <img src={userPhotoSrc} alt="foto aluno" />
        </div>
        <div className={styles.userHeaderTextContainer}>
          <h1>Amora Cardoso de Abreu</h1>
          <p>Manu e Renan</p>
          <p>1° ano</p>
        </div>
      </div>
    </>
  );
}

export default UserHeader;
