import React from "react";
const loremIpsum = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus ullamcorper tortor, sed ultricies justo. Quisque ut malesuada ipsum. Phasellus consectetur lectus sit amet erat dignissim, ut vehicula libero aliquam. Sed ac lectus auctor, commodo felis nec, tempus justo.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus ullamcorper tortor, sed ultricies justo. Quisque ut malesuada ipsum. Phasellus consectetur lectus sit amet erat dignissim, ut vehicula libero aliquam. Sed ac lectus auctor, commodo felis nec, tempus justo.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus ullamcorper tortor, sed ultricies justo. Quisque ut malesuada ipsum. Phasellus consectetur lectus sit amet erat dignissim, ut vehicula libero aliquam. Sed ac lectus auctor, commodo felis nec, tempus justo.",
];

import styles from "./userStyles.module.css";

import Header from "../Header/Header";
import UserHeader from "./UserHeader";
import UserFinance from "./UserFinance";
import UserHomeScreen from "./UserHomeScreen";
import { Route, Routes } from "react-router";
import UserComportamentoScreen from "./UserComportamentoScreen";
import UserEvolucaoScreen from "./UserEvolucaoScreen";

function UserScreen() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <Header>
        <UserHeader />
      </Header>
      <Routes>
        <Route path="/" element={<UserHomeScreen />} />
        <Route path="/financeiro" element={<UserFinance />} />
        <Route path="/comportamento" element={<UserComportamentoScreen />} />
        <Route path="/evolucao" element={<UserEvolucaoScreen />} />
      </Routes>
    </div>
  );
}

export default UserScreen;
