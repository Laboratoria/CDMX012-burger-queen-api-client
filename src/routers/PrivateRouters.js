import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import { auth, onAuthStateChanged } from "../lib/firebase-config";
import Chef from "../components/Chef";
import Personal from "../components/Personal";

const PrivateRoutes = () => {
  const [role, setRole] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userEmail = user.email;
      const initial = userEmail[0];
      console.log(typeof initial);

      if (initial === "a") {
        setRole("admin");
      } else if (initial === "w") {
        setRole("waiter");
      } else if (initial === "c") {
        setRole("chef");
      }
    }
    console.log(user);
    console.log(role);
  });

  if (role === "admin") {
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
