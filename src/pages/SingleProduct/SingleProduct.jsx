import { FavoriteBorderOutlined, LocalMallOutlined } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_PRODUCT } from "../../fake-data";
import CartContext from "../../store/cart-context";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const pid = useParams();
  const [item, setItem] = useState({});
  const ctx = useContext(CartContext);

  useEffect(() => {
    const items = DUMMY_PRODUCT.find((item) => {
      return item.id === pid.pid;
    });
    setItem(items);
  }, []);

  return (
    <div className="singleProduct">
      <div className="left">
        <img src={item.image} alt="" />
      </div>
      <div className="right">
        <div className="brand">{item.brand}</div>
        <div className="name">{item.name}</div>
        <div className="price">&#8377;{item.price}</div>
        <div className="product-details">Product Details</div>
        <ul className="info">
          <li>Wipe with a Clean, dry cloth when needed</li>
          <li>Fabric insole</li>
          <li>Lace Fastening</li>
          <li>Fabric upper</li>
          <li>Package contains: 1 pair of sneakers</li>
          <li>Rubber sole</li>
          <li>Product Code: {item.id}</li>
        </ul>
        <div onClick={() => ctx.addToCart(item)} className="addToBag btn">
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
