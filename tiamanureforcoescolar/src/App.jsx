import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContextComponent } from "./AppContext";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Logout from "./components/LoginScreen/Logout";
import Home from "./components/Home";
import TermosScreen from "./components/Termos/TermosScreen";
import UserScreen from "./components/UserScreen/UserScreen";
import AdminsHome from "./components/AdminScreen/AdminsHome";
import RouterGuard from "./components/helpers/RouterGuard";

function App() {
  return (
    <BrowserRouter>
      <AppContextComponent>
        <Routes>
          <Route path="/" element={<RouterGuard><Home /></RouterGuard>} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/user/*" element={<RouterGuard><UserScreen /></RouterGuard>} />
          <Route path="/termos" element={<RouterGuard><TermosScreen /></RouterGuard>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin/*" element={<RouterGuard><AdminsHome /></RouterGuard>} />
        </Routes>
      </AppContextComponent>
    </BrowserRouter>
  );
}

export default App;
