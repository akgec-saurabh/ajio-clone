import {
  FavoriteBorderOutlined,
  LocalMallOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import "./NavLink.scss";

const NavLink = () => {
  return (
    <div className="navlink">
      <SearchOutlined className="icon" />
      <FavoriteBorderOutlined className="icon" />
      <Badge badgeContent={4} color="primary">
        <LocalMallOutlined className="icon" />
      </Badge>
      <PersonOutlineOutlined className="icon" />
      <span className="auth-btn">Login</span>
    </div>
  );
};

export default NavLink;
