import React from "react";
import { NavLink } from "react-router-dom";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import { DUMMY_PRODUCT } from "../../fake-data";
import "./Products.scss";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

const Products = () => {
  return (
    <>
      <div className="products">
        <h2 className="heading-products">Footwear</h2>

        <div className="container">
          <div className="left">
            <Category />
          </div>
          <div className="right">
            <div className="container">
              {DUMMY_PRODUCT.map((p) => (
                <Product key={p.producId} props={p} />
              ))}
              <Product hide={true} props={DUMMY_PRODUCT[0]} />
              <Product hide={true} props={DUMMY_PRODUCT[0]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
