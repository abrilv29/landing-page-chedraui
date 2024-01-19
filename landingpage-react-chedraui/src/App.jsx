import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./components/Search/SearchResults";
import NavMenu from "./components/LandingPage/NavMenu";
import HomePage from "./components/LandingPage/HomePage";

const App = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resultados-busqueda" element={<SearchResults />} />
        {/* Otras rutas de tu aplicación */}
      </Routes>
    </Router>
  );
};


export default App;