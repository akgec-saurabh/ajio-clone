import React, { useContext, useRef, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import AuthContext from "../../context/auth-context";

import "./Auth.scss";

const Auth = () => {
  const [isLoginMode, setisLoginMode] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/auth/${
          isLoginMode ? "login" : "signup"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: isLoginMode ? "" : nameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      ctx.login(responseData);
    } catch (err) {
      console.log(err);
      setError({
        title: "Error",
        message: err.message,
      });
    }
  };
  const onSwitchHandler = () => {
    setisLoginMode(!isLoginMode);
    navigate(!isLoginMode ? "login" : "signup");
  };

  const routes = (
    <>
      {error && <ErrorModal onClick={() => setError(null)} props={error} />}
      <div className="auth_form">
        <form onSubmit={onSubmitHandler}>
          <div className="heading-auth">{isLoginMode ? "Login" : "Signup"}</div>
          {!isLoginMode && (
            <input ref={nameRef} required type="text" placeholder="Name" />
          )}
          <input ref={emailRef} required type="email" placeholder="Email" />
          <input
            ref={passRef}
            required
            type="password"
            placeholder="Password"
          />

          <button type="submit">{isLoginMode ? "Login" : "Signup"}</button>
        </form>
        <div className="switch" onClick={onSwitchHandler}>
          Switch to {!isLoginMode ? "Login" : "Signup"}
        </div>
      </div>
    </>
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
