import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videojuegos from "../assets/img/banner-videojuegos.png";
import electrodomesticos from "../assets/img/banner-linea.png";
import sonido from "../assets/img/banner-sonido.png";
import gamer from "../assets/img/banner-gamer.png";
import cel from "../assets/img/banner-cel.png";

const BannerHeader = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // ajusta según sea necesario
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const featuredItems = [
    {
      title: "Chedrauilandia",
      imageUrl: videojuegos,
    },
    {
      title: "Linea Blanca",
      imageUrl: electrodomesticos,
    },
    {
      title: "Tecnologia",
      imageUrl: sonido,
    },
    // Agrega más elementos según sea necesario
  ];

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <Slider {...sliderSettings}>
              {featuredItems.map((item, index) => (
                <div key={index} className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto aspect-square transition duration-500"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="group relative block mb-4 pt-1">
              <img
                src={gamer}
                alt=""
                className="w-full h-auto aspect-square  group-hover:opacity-90"
                style={{ maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="lg:col-span-1">
            <a href="#" className="group relative block mb-4">
              <img
                src={cel}
                alt=""
                className="w-full h-auto aspect-square  group-hover:opacity-90"
                style={{ maxWidth: "100%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHeader;
