import logo from '../assets/img/logo.png';

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
        </div>
      </div>
    </>
  );
}

export default NavBar