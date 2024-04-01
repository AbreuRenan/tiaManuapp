import React from 'react'

import styles from "./LoginScreen.module.css"

function LoginScreenHeader() {
  return (
    <div className={styles.loginHeaderContainer}>
        <h3 className={styles.loginHeaderh3}>Reforço Escolar da</h3>
        <h1 className={styles.loginHeaderh1}>Tia Manu</h1>
    </div>
  )
}

export default LoginScreenHeader