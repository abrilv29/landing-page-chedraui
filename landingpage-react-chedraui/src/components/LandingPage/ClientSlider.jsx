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
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full bg-slate-100 py-16 shadow-md border-b-4 border-customBlue">
      <h2 className="mx-16 text-left text-2xl font-monserrat font-semibold tracking-wide text-customBlue md:text-3xl">
        Nuetras marcas
      </h2>

      <Slider {...settings} className="container mx-auto py-10">
        {images.map((image, index) => (
          <div key={index} className="w-16 px-2">
            <img src={image} alt={`Corporate Inc ${index + 1}`} className="max-w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
