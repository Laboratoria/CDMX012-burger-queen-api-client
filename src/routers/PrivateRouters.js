import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../components/Waiters/MenuView";
import { auth, onAuthStateChanged } from "../lib/firebase-config";
import Chef from "../components/chef/Chef";
import Personal from "../components/Admin/PersonalView";

const PrivateRoutes = () => {
  const [roleAdmin, setRoleAdmin] = useState(null);
  const [role, setRole] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userEmail = user.email;
      const initial = userEmail[0];

      if (initial === "a") {
        setRoleAdmin("admin");
      } else if (initial === "w") {
        setRole("waiter");
      } else if (initial === "c") {
        setRole("chef");
      }
    }
  });

  if (roleAdmin === "admin") {
    return (
      <Routes>
        <Route path="/" element={<Personal />} />
      </Routes>
    );
  } else if (role === "waiter") {
    return (
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    );
  } else if (role === "chef") {
    return (
      <Routes>
        <Route path="/" element={<Chef />} />
      </Routes>
    );
  }
};

export default PrivateRoutes;
