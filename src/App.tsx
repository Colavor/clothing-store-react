import Header from "./components/Header/Header"; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Footer from "./components/Footer/Footer"; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Catalog from "./pages/Catalog/Catalog";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
