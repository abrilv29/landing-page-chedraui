
/* contenedor principal de la landingpage */

import CardProducts from "./CardProducts";
import Footer from "./Footer";
import Gallery from "./Gallery";
import HeaderPage from "./HeaderPage";
import Online from "./Online";
import SliderMarcas from "./SliderMarcas";
import ClientSlider from "./ClientSlider";




function HomePage() {
  return (
    <>
    <HeaderPage />
    <CardProducts />
    <Gallery />
    <Online/>
    <SliderMarcas/>
    <ClientSlider/>

    <Footer/>
  

   


    </>
  )
}

export default HomePage