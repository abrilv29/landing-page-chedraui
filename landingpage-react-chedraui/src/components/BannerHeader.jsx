import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videojuegos from "../assets/img/banner-videojuegos.png";

const BannerHeader = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const featuredItems = [
    {
      title: "Casual Trainers",
      imageUrl: videojuegos,
    },
    {
      title: "Winter Jumpers",
      imageUrl:
        "https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    // Agrega más elementos según sea necesario
  ];

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <Slider {...sliderSettings}>
              {featuredItems.map((item, index) => (
                <div key={index} className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto aspect-square object-cover transition duration-500"
                    style={{ maxHeight: "600px" }}
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">{item.title}</h3>
                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-span-1">
            {featuredItems.slice(0, 2).map((item, index) => (
              <a key={index} href="#" className="group relative block mb-4">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-full h-auto aspect-square object-cover transition duration-500 group-hover:opacity-90"
                  style={{ maxHeight: "300px" }}
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHeader;
