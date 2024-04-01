import React from "react";
import UserWallboard from "./UserWallboard";
import UserOptionsPanel from "./UserOptionsPanel";

import styles from './userStyles.module.css'

function UserHomeScreen() {
  return (
    < >
      <UserWallboard />
      <UserOptionsPanel />
    </>
  );
}

export default UserHomeScreen;
