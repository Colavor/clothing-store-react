import Header from "./components/Header/Header"; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Footer from "./components/Footer/Footer"; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Catalog from "./pages/Catalog/Catalog";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/category/:categorySlug" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
