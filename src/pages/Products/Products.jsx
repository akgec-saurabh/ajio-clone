import React from "react";
import Product from "../../components/Product/Product";
import "./Products.scss";
const DUMMY_PRODUCT = [
  {
    id: 1,
    image:
      "https://i.ibb.co/NK7f35d/shoe-mockup-templates-cover-removebg-preview.png",
    name: "Snickers",
    size: "Large",
    quantity: 1,
    price: 6050,
  },
  {
    id: 2,
    image:
      "https://i.ibb.co/NK7f35d/shoe-mockup-templates-cover-removebg-preview.png",
    name: "Snickers",
    size: "Small",
    quantity: 1,
    price: 2200,
  },
  {
    id: 3,
    image:
      "https://i.ibb.co/NK7f35d/shoe-mockup-templates-cover-removebg-preview.png",
    name: "Snickers",
    size: "Medium",
    quantity: 1,
    price: 3000,
  },
  {
    id: 4,
    image:
      "https://i.ibb.co/NK7f35d/shoe-mockup-templates-cover-removebg-preview.png",
    name: "Snickers",
    size: "Small",
    quantity: 1,
    price: 1500,
  },
  {
    id: 5,
    image:
      "https://i.ibb.co/NK7f35d/shoe-mockup-templates-cover-removebg-preview.png",
    name: "Snickers",
    size: "Medium",
    quantity: 1,
    price: 4500,
  },
];
const Products = () => {
  return (
    <div className="products">
      <div className="heading">SHOP ----</div>
      <div className="container">
        {DUMMY_PRODUCT.map((p) => (
          <Product key={p.id} props={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
