import React, { useState } from "react";
import { SignUp } from "../raw/SignupForm";
import { useDispatch } from "react-redux";
import { register } from "../redux/slice";

const SignUpForm = () => {
  const [user, handleUser] = useState({
    f_name: "",
    l_name: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(
      register({
        f_name: user.f_name,
        l_name: user.l_name,
        username: user.username,
        pwd: user.password,
      })
    );
  };

  return (
    <SignUp
      user={user}
      handleUser={handleUser}
      handleRegister={handleRegister}
    />
  );
};

export default SignUpForm;
