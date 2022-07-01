import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MenuView from "../components/Waiters/MenuView";
import { auth, onAuthStateChanged } from "../lib/firebase-config";
import ChefView from "../components/chef/ChefView";
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
        <Route path="/" element={<MenuView />} />
      </Routes>
    );
  } else if (role === "chef") {
    return (
      <Routes>
        <Route path="/" element={<ChefView />} />
      </Routes>
    );
  }
};

export default PrivateRoutes;
