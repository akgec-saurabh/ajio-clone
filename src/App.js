import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </div>
  );
}

export default App;
