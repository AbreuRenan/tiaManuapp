import React from "react";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import { inicializarFirebaseApp } from "./firebaseConfigs";

const db = inicializarFirebaseApp();

export const AppContext = React.createContext();
export function AppContextComponent({ children }) {
  const [userData, setUserData] = React.useState([]);
  const [alunosList, setAlunosList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  async function getAlunosList() {
    const docsRef = collection(db, "alunos");
    const snapshot = await getDocs(docsRef);
    const newAlunoList = snapshot.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    });
    setAlunosList(newAlunoList);
    console.log(alunosList);
  }

  React.useEffect(() => {
    getAlunosList();
  }, []);

  return (
    <AppContext.Provider
      value={{
        getAlunosList,
        userData,
        setUserData,
        alunosList,
        setAlunosList,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
