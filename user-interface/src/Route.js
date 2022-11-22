import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Login } from "./components/Login";
import SignUpForm from "./components/SignUp";
import { fetchSelector } from "./redux/storeDataFetcher";
// import { fetchLogin } from "./redux/storeDataFetcher";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => fetchSelector(state)).fetchLogin
    .isLoggedIn;

  // const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <App /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
