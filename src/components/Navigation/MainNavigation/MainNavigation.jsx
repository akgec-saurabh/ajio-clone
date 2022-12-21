import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../store/cart-context";
import "./MainNavigation.scss";
import BtnLink from "../BtnLinks/BtnLink";
const MainNavigation = () => {
  const ctx = useContext(CartContext);
  const navigate = useNavigate();

  const goToHomeHandler = () => {
    navigate("/");
  };

  return (
    <header className="mainNavigation">
      <div onClick={goToHomeHandler} className="logo">
        AJIO
      </div>
      <div className="data">
        <BtnLink />
      </div>
    </header>
  );
};

export default MainNavigation;
