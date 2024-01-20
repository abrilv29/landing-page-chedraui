/* contenedor principal de la landingpage */

import CardProducts from "./CardProducts";
import Footer from "./Footer";
import HeaderPage from "./HeaderPage";
import Online from "./Online";
import SliderMarcas from "./SliderMarcas";
import ClientSlider from "./ClientSlider";
import ProductAll from "../Products/ProductAll";
import Newsletter from "./Nestlleter";



function HomePage() {
  return (
    <>
    <HeaderPage />
    <CardProducts />
    <ProductAll/>
    <Online/>
    <SliderMarcas/>
    <ClientSlider/>
    <Newsletter/>
    <Footer/>
  

   


    </>
  )
}

export default HomePage