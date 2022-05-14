import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mt-10">
      {/* <p className="text-center m-10  text-3xl font-bold text-silver">¡Mirá nuestros productos!</p> */}
      <div
        className="bg-gradient-to-b from-purple to-gray-900 rounded-lg"
        style={{ width: "80vw", margin: "auto" }}
      >
        <h2> </h2>
        <Slider {...settings}>
          <div>
            <img
              src="https://gaming-city.com.ar/static/home-slider/coolermaster-desktop.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://gaming-city.com.ar/static/home-slider/poweredbyasus-desktop.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://gaming-city.com.ar/static/home-slider/asusvp249-desktop.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
