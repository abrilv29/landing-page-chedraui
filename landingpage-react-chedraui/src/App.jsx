import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./components/Search/SearchResults";
import NavMenu from "./components/LandingPage/NavMenu";
import HomePage from "./components/LandingPage/HomePage";
import CategoriaJeweler from "./components/Categorias/CategoriaJeweler";
import CategoriaMens from "./components/Categorias/CategoriaMens";
import ProductAll from "./components/Products/ProductAll";

const App = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resultados-busqueda" element={<SearchResults />} />
        <Route path="/categoria-jeweler" element={<CategoriaJeweler />} /> 
        <Route path="/categoria-mens" element={<CategoriaMens />} />
        <Route path="/catalogo-productos" element={<ProductAll />} />
      </Routes>
    </Router>
  );
};


export default App;