import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import selecto from "../../assets/img/logo_selecto.png";
import chedraui from "../../assets/img/logo_chedraui.png";
import first from "../../assets/img/logo_firststreet.png";
import sun from "../../assets/img/logo_sun.png";
import supramed from "../../assets/img/logo_supramed.png";
import envisage from "../../assets/img/logo_envisage.png";
import selectobaby from "../../assets/img/logo_selectobaby.png";
import home from "../../assets/img/logo_home.png";

const ClientSlider = () => {
  const images = [
    selecto,
    chedraui,
    first,
    sun,
    supramed,
    envisage,
    selectobaby,
    home,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px', // Ajusta este valor según tus preferencias
  };

  return (
    <div className="w-full bg-gray-100 py-16 shadow-md border-b-4 border-b-blue-600">
      <h2 className="mx-2 text-center text-2xl font-bold uppercase tracking-wide text-blue-600 md:text-3xl">
        Trusted by Over 5000 Clients
      </h2>

      <Slider {...settings} className="container mx-auto py-10">
        {images.map((image, index) => (
          <div key={index} className="w-32 px-2">
            <img src={image} alt={`Corporate Inc ${index + 1}`} className="max-w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
