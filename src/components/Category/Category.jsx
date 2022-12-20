import { AddOutlined } from "@mui/icons-material";
import React from "react";
import "./Category.scss";

const Category = () => {
  return (
    <div className="category">
      <div className="refine">Refine By</div>
      <ul>
        <li>
          <AddOutlined className="icon" /> Gender
        </li>
        <li>
          <AddOutlined className="icon" /> Category
        </li>
        <li>
          <AddOutlined className="icon" /> Price
        </li>
        <li>
          <AddOutlined className="icon" /> Brands
        </li>
        <li>
          <AddOutlined className="icon" /> Occasion
        </li>
        <li>
          <AddOutlined className="icon" /> Colors
        </li>
      </ul>
    </div>
  );
};

export default Category;
