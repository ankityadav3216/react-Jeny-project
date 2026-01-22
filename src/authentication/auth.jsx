// src/authentication/auth.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./loginmodel/login";
import Signup from "./registration/sign-up";

const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Auth;
