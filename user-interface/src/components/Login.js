import React, { useState } from "react";
import Form from "../raw/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice";
import { fetchSelector } from "../redux/storeDataFetcher";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoginSucced = useSelector((state) => fetchSelector(state)).fetchLogin;
  const [loginCredentials, handleLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const [counter, handleCounter] = useState(0);
  const attemptLogin = async () => {
    dispatch(
      login({
        username: loginCredentials.username,
        password: loginCredentials.password,
      })
    );
  };
  return (
    <>
      <Form
        attemptLogin={attemptLogin}
        isLoginSucced={isLoginSucced}
        loginCredentials={loginCredentials}
        handleLoginCredentials={handleLoginCredentials}
      />
      {isLoginSucced.token}
    </>
  );
};
