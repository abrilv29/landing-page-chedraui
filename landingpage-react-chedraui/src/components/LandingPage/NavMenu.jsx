import SearchBar from "../Search/SearchBar";
import LinksNav from "./LinksNav";
import logo from "../../assets/img/logo.png";
import { BsCart2 } from "react-icons/bs";
import { TbUser } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

const NavMenu = () => {
  return (
    <>
    <LinksNav />
    <nav className="container mx-auto p-4">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        {/* Contenido del logotipo */}
        <img className="w-40 md:w-32 lg:w-48 h-auto md:h-auto mb-4 md:mb-0" src={logo} alt="logo" />

        {/* Barra de búsqueda */}
        <div className="w-full md:w-auto md:ml-4">
          <SearchBar />
        </div>

        {/* Íconos de usuario, ubicación y carrito */}
        <div className="flex items-center space-x-4 text-sm md:text-base lg:text-lg m-2">
          <div className="flex items-center font-montserrat font-medium">
            <TbUser className="text-[#e57308]"/>
            <span className="ml-2 text-customBlue">Cuenta</span>
          </div>

          <div className="flex items-center font-montserrat font-medium">
            <SlLocationPin className="text-[#e57308]" />
            <span className="ml-2 hidden md:inline text-customBlue">Ubicación</span>
          </div>

          <div className="flex items-center font-montserrat font-medium">
            <BsCart2 className="text-[#e57308]"/>
            <span className="ml-2 text-customBlue">0</span>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavMenu;
