import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContextComponent } from "./AppContext";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Logout from "./components/LoginScreen/Logout";
import Home from "./components/Home";
import TermosScreen from "./components/Termos/TermosScreen";
import UserScreen from "./components/UserScreen/UserScreen";
import RouterGuard from "./components/helpers/RouterGuard";
import AdminScreen from "./components/AdminScreen/AdminScreen";

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
          <Route path="/admin/*" element={<RouterGuard><AdminScreen /></RouterGuard>} />
        </Routes>
      </AppContextComponent>
    </BrowserRouter>
  );
}

export default App;
