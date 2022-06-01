import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu"
import {auth, onAuthStateChanged} from "../lib/firebase-config"
import Chef from "../components/Chef";
import Personal from "../components/Personal";


const PrivateRoutes = () => {
  const [role, setRole] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userEmail = user.email;
      const initial = userEmail[0];
      if (initial === "a") {
        setRole("admin");
      } else if (initial === "w") {
        setRole("waiter" || "waitress");
      } else if (initial === "c") {
        setRole("chef");
      }
    }
  });

  if (role === "admin") {
    return (
      <Routes>
        <Route path="/admin" element={<Personal />} />
      </Routes>
    );
  } else if (role === "waiter" || role === "waitress") {
    return (
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    );
  } else if (role === "chef") {
    return (
      <Routes>
        <Route path="/chef" element={<Chef/>} />
      </Routes>
    );
  }
};

export default PrivateRoutes;
