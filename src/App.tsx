import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./pages/Catalog/Catalog";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import "./styles/App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Favourites from "./pages/Favourites/Favourites";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/catalog" replace />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/category/:categorySlug" element={<Catalog />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
