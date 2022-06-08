import Login from "../components/Login";
<<<<<<< HEAD
import {Routes, Route} from "react-router-dom"
import React from 'react';
=======
import { Routes, Route } from "react-router-dom";
import React from "react";
>>>>>>> 6ae6fefd02b8773f6b83b70b1de82258d19729fa

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default PublicRoutes;
