import { FavoriteBorderOutlined, LocalMallOutlined } from "@mui/icons-material";
import React from "react";
import "./SingleProduct.scss";

const SingleProduct = () => {
  return (
    <div className="singleProduct">
      <div className="left">
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20221007/P7G5/633f5193aeb269659c28b732/-473Wx593H-465112039-blue-MODEL6.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <div className="brand">PUMA</div>
        <div className="name">Lace fiaf jaf fdsf</div>
        <div className="price">2,250</div>
        <div className="product-details">Product Details</div>
        <ul className="info">
          <li>Wipe with a Clean, dry cloth when needed</li>
          <li>Fabric insole</li>
          <li>Lace Fastening</li>
          <li>Fabric upper</li>
          <li>Package contains: 1 pair of sneakers</li>
          <li>Rubber sole</li>
          <li>Product Code: 545454545154845</li>
        </ul>
        <div className="addToBag btn">
          <LocalMallOutlined className="icon" /> Add To Bag
        </div>
        <div className="detail">Handpicked styles | assured quality</div>
        <div className="save btn">
          <FavoriteBorderOutlined className="icon" /> Save To WishList
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
