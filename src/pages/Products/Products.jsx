import React from "react";
import { NavLink } from "react-router-dom";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import "./Products.scss";

const DUMMY_PRODUCT = [
  {
    id: 3,
    image:
      "https://i.ibb.co/gvNTV4W/liberty-black-mid-top-lace-up-casual-shoes.webp",
    name: "Lace Fastening Flat Heels Sneakers",
    size: "Medium",
    brand: "Liberty",

    quantity: 1,
    price: 3000,
  },
  {
    id: 4,
    image:
      "https://i.ibb.co/Rh7D4S7/asics-blue-gel-venture-8-lace-up-shoes.webp",
    name: "Air Zoom Peagasus 39 Running Shoes",
    size: "Small",
    brand: "Buda Jeans Co",

    quantity: 1,
    price: 1500,
  },
  {
    id: 1,
    image:
      "https://i.ibb.co/VJckGsk/buda-jeans-co-multicoloured-low-top-lace-up-sneakers.webp",
    name: "Gel Venture 8 Lace-Up Shoes",
    size: "Large",
    brand: "Mactree",

    quantity: 1,
    price: 6050,
  },
  {
    id: 2,
    image:
      "https://i.ibb.co/zPNc3VL/buda-jeans-co-slate-blue-mid-top-lace-up-sneakers.webp",
    name: "Patrik Pro Low-Top Running Shoes",
    brand: "Campus",
    size: "Small",
    quantity: 1,
    price: 2200,
  },
  {
    id: 5,
    image:
      "https://i.ibb.co/9rTR2G1/nike-brown-air-zoom-pegasus-39-shield-running-shoes.webp",
    name: "Flat Slip-On Moccasins",
    brand: "SHUAN",

    size: "Medium",
    quantity: 1,
    price: 4500,
  },
];
const Products = () => {
  return (
    <div className="products">
      <h2 className="heading">Footwear</h2>

      <div className="container">
        <div className="left">
          <Category />
        </div>
        <div className="right">
          <div className="container">
            {DUMMY_PRODUCT.map((p) => (
              <Product key={p.id} props={p} />
            ))}
            <Product hide={true} props={DUMMY_PRODUCT[0]} />
            <Product hide={true} props={DUMMY_PRODUCT[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
