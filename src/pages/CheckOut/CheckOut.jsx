import React, { useContext, useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import AuthContext from "../../context/auth-context";
import CartContext from "../../store/cart-context";
import "./CheckOut.scss";
const CheckOut = () => {
  const { cart } = useContext(CartContext);
  const { token } = useContext(AuthContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/checkout",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...token, products: cart }),
          }
        );
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        // ctx.login(responseData);
      } catch (err) {
        console.log(err);
        setError({
          title: "Error",
          message: err.message,
        });
      }
    };

    sendRequest();
  }, []);

  return (
    <>
      {error && <ErrorModal props={error} onClick={() => setError(null)} />}
      <div className="checkout">
        <h2 className="checkout_heading">CheckOut Page</h2>
        <div className="container">
          <div className="user_details">
            <h3>User Details</h3>
            <ul>
              <li>User Name</li>
              <li>User Email</li>
              <li>User Id</li>
            </ul>
          </div>
          <div className="cart_details">
            <h3>Cart Details</h3>
            <ul>
              {cart.map((i) => (
                <li key={i.id}>
                  <h4>Product Name : {i.name}</h4>
                  <div>Quantity : {i.quantity}</div>
                  <div>Total Price : {i.price * i.quantity}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
