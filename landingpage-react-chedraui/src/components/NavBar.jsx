import logo from '../assets/img/logo.png';
import { BsSearch } from "react-icons/bs";
import { TbUser } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import EnlacesMenu from './EnlacesMenu';

function NavBar() {
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

          {/* Input search */}
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-customGrind border-none outline-none px-10 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="¿Qué estás buscando?"
            />
            <BsSearch
            className="absolute top-0 right-4 mt-4 text-gray-500" size={20}
            />

          </div>

          <div className="flex gap-4">
              {/* Ícono y texto de Cuenta */}
              <div className="flex items-center font-montserrat font-medium">
              <TbUser className= "color-icon"/>
              <span className="text-base text-customBlue ml-2">Cuenta</span>
                
              </div>
              
              {/* Ícono y texto de Ubicación */}
              <div className="flex items-center font-montserrat font-medium">
                <SlLocationPin className= "color-icon"/>
                <span className="text-base  text-customBlue  ml-2">Ubicación</span>
              </div>

                 {/* Ícono y texto de carrito */}
                 <div className="flex items-center font-montserrat font-medium">
                 <BsCart2 className= "color-icon" />
                <span className="text-base  text-customBlue  ml-2"> 0 </span>
              </div>
          </div>
        </div>
      </div>
      <EnlacesMenu/>
    </>
  );
}

export default NavBar