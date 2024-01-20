import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientSlider = () => {
  const images = [
    "/images/v_4f0x3etePbAwIeGnqWS.png",
    "/images/GkFKzowNcgxqSdxMw11na.png",
    "/images/Kx7GvMcT8ewzDlNZPLkLE.png",
    "/images/oOyuz8sTx8VpDneLnQSef.png",
    "/images/AgYgu-pDBywcYCD2YfL3p.png",
    "/images/zj2Gt30nlmo-7GK5BXo5C.png",
    "/images/9i0_cazyujYv1NwUM9M44.png",
    "/images/7Segj8XLDXiyQqlpQh1pd.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <div className="w-full bg-gray-100 py-16 shadow-md border-b-4 border-b-blue-600">
      <h2 className="mx-2 text-center text-2xl font-bold uppercase tracking-wide text-blue-600 md:text-3xl">
        Trusted by Over 5000 Clients
      </h2>

      <Slider {...settings} className="container mx-auto py-10">
        {images.map((image, index) => (
          <div key={index} className="w-40 px-6">
            <img src={image} alt={`Corporate Inc ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;

