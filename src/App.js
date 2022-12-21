import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";
import Announcement from "./components/Announcement/Announcement";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { useContext, useEffect } from "react";
import AuthContext from "./context/auth-context";
import CheckOut from "./pages/CheckOut/CheckOut";
import CartContext from "./store/cart-context";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div className="App">
      <MainNavigation />
      <Announcement />

      <Routes>
        {!ctx.token && <Route path="/auth/*" element={<Auth />} />}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:pid" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        {
          <Route
            path="/checkout"
            element={ctx.token ? <CheckOut /> : <Navigate to="/auth/login" />}
          />
        }
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </div>
  );
}

export default App;
