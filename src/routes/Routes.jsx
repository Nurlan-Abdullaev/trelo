import React from "react";
import Login from "../components/login/Login";
import Signup from "../components/signup/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { Trelo } from "../components/trelo/Trelo";

export const Routest = () => {
  return (
    <Routes>
      <Route path="/mu-trelo" element={<Navigate to="/" />} />
      <Route path="/" element={<Login />} />
      <Route path="/trello" element={<Trelo />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
