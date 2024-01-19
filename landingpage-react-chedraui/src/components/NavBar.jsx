import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import logo from "../assets/img/logo.png";
import { BsSearch } from "react-icons/bs";
import { TbUser } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import EnlacesMenu from "./EnlacesMenu";
import SearchProducto from "./Categorias/SearchProducto";

function NavBar() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => setProducts(response.data));
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchTerm, products]);

  const handleSearch = async () => {
    try {
      // Realizar la búsqueda y obtener los resultados (similar a tu implementación actual)
      await performSearch(searchTerm);

      // Redirigir a la página de resultados con la consulta de búsqueda
      navigate(`/search?q=${searchTerm}`);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const performSearch = async (term) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?title=${term}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleResultClick = (product) => {
    // Redirigir a la página del producto (ajusta la lógica según sea necesario)
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      {/* Enlaces y separador */}
      <div className="flex justify-end p-2 border-b border-gray-200 w-full font-montserrat font-medium">
        <a href="#" className="mr-4 mb-2 text-customBlue">Folleto</a>
        <a href="#" className="mr-4 mb-2 text-customBlue">Receta</a>
        <a href="#" className="mb-2 text-customBlue">Ayuda</a>
      </div>

      {/* Contenedor de la barra de navegación */}
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center pt-2">
          <img style={{ width: '13%', padding: '1rem' }} src={logo} alt="logo" />

          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-customGrind border-none outline-none px-10 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="¿Qué estás buscando?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <BsSearch
              className="absolute top-0 right-4 mt-4 text-gray-500 cursor-pointer"
              size={20}
              onClick={handleSearch}
            />
          </div>

          {/* Mostrar resultados de búsqueda utilizando el componente SearchResults */}
        {searchTerm && <SearchProducto results={searchResults} onResultClick={handleResultClick} />} 


          <div className="flex gap-4">
            {/* Ícono y texto de Cuenta */}
            <div className="flex items-center font-montserrat font-medium">
              <TbUser className="color-icon" />
              <span className="text-base text-customBlue ml-2">Cuenta</span>

            </div>

            {/* Ícono y texto de Ubicación */}
            <div className="flex items-center font-montserrat font-medium">
              <SlLocationPin className="color-icon" />
              <span className="text-base  text-customBlue  ml-2">Ubicación</span>
            </div>

            {/* Ícono y texto de carrito */}
            <div className="flex items-center font-montserrat font-medium">
              <BsCart2 className="color-icon" />
              <span className="text-base  text-customBlue  ml-2"> 0 </span>
            </div>
          </div>
        </div>
      </div>
      <EnlacesMenu />
    </>
  );
}

export default NavBar