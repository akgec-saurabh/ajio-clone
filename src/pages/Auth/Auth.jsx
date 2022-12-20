import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  const [isLoginMode, setisLoginMode] = useState(true);
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    navigate("/products");
  };
  const onSwitchHandler = () => {
    setisLoginMode(!isLoginMode);
    navigate(!isLoginMode ? "login" : "signup");
  };

  const routes = (
    <form onSubmit={(e) => e.preventDefault()}>
      {!isLoginMode && <input type="text" placeholder="Name" />}
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={onSubmitHandler}>
        {isLoginMode ? "Login" : "Signup"}
      </button>
      <button onClick={onSwitchHandler}>
        Switch to {!isLoginMode ? "Login" : "Signup"}
      </button>
    </form>
  );

  return (
    <div className="auth">
      <Routes>
        <Route path="login" element={routes} />
        <Route path="signup" element={routes} />
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </div>
  );
};

export default Auth;
