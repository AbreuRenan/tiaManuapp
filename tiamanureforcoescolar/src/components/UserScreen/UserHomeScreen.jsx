import React from "react";
import UserWallboard from "./UserWallboard";
import UserOptionsPanel from "./UserOptionsPanel";

import styles from './userStyles.module.css'

function UserHomeScreen() {
  const localData = [JSON.parse(localStorage.getItem('m'))];

  return (
    < >
      <UserWallboard data={localData}/>
      <UserOptionsPanel />
    </>
  );
}

export default UserHomeScreen;
