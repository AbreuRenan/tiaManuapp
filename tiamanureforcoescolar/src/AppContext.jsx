import React from "react";


import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore, query } from "firebase/firestore";
import { get } from "firebase/database";


function inicializarFirebaseApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyCfYAzg0RYE3ZcJqZ5ymtfKwPLsnK85spE",
    authDomain: "reforcoescolartiamanu.firebaseapp.com",
    projectId: "reforcoescolartiamanu",
    storageBucket: "reforcoescolartiamanu.appspot.com",
    messagingSenderId: "654597599019",
    appId: "1:654597599019:web:97f662ba9695b146e8df6e"
  };
  const app = initializeApp(firebaseConfig);
  return getFirestore(app);
}

const db = inicializarFirebaseApp();


export const AppContext = React.createContext();
export function AppContextComponent({ children }) {
  const [userData, setUserData] = React.useState([]);
  const [alunosList, setAlunosList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  async function getAlunosList() {
    const docsRef = collection(db,"alunos");
    const snapshot = await getDocs(docsRef);
    snapshot.forEach( doc => {
      console.log(doc.data())
    })
  }

  getAlunosList()


  
  return (
    <AppContext.Provider
      value={{
        userData, setUserData,
        alunosList, setAlunosList,
        isLoggedIn, setIsLoggedIn,
        isLoading, setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
