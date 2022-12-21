import React, { useCallback, useEffect, useState } from "react";

const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  token: null,
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let data;
    try {
      data = JSON.parse(localStorage.getItem("userData"));
    } catch (err) {
      console.log(err);
    }
    if (data) {
      setToken(data);
    }
  }, []);

  const login = useCallback((data) => {
    try {
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
    setToken(data);
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem("userData");
    } catch (err) {
      console.log(err);
    }
    setToken(null);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, token }}>
      {props.children}
    </AuthContext.Provider>
  );
};
