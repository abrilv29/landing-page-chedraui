import { useState } from "react";
import { BsPerson, BsSearch, BsGeoAlt } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src="/path/to/logo.png" alt="Logo" className="h-8" />

        {/* Menu de navegación */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Inicio
          </a>
          <a href="#" className="hover:text-gray-300">
            Productos
          </a>
          <a href="#" className="hover:text-gray-300">
            Servicios
          </a>
          {/* Agrega más enlaces según sea necesario */}
        </div>

        {/* Input de búsqueda */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="py-2 px-4 border border-gray-600 rounded-full focus:outline-none focus:border-indigo-500"
            />
            <BsSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500" />
          </div>

          {/* Icono de ubicación */}
          <div className="flex items-center">
            <BsGeoAlt className="text-xl" />
            <span className="ml-2">Ubicación</span>
          </div>

          {/* Icono de inicio de sesión */}
          <div className="flex items-center">
            <BsPerson className="text-xl" />
            <span className="ml-2">Iniciar sesión</span>
          </div>
        </div>

        {/* Icono de menú para dispositivos móviles */}
        <div className="md:hidden">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Dropmenu para dispositivos móviles */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-gray-800 p-4 rounded-md">
            <a href="#" className="block text-white py-2 hover:text-gray-300">
              Inicio
            </a>
            <a href="#" className="block text-white py-2 hover:text-gray-300">
              Productos
            </a>
            <a href="#" className="block text-white py-2 hover:text-gray-300">
              Servicios
            </a>
            {/* Agrega más enlaces según sea necesario */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
