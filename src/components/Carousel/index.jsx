import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{width : "80vw", margin : "auto"}}>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Alnilam4.png?v=1640225660" alt="" />
          </div>
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Alnilam4.png?v=1640225660" alt="" />
          </div>
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Alnilam4.png?v=1640225660" alt="" />
          </div>
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Alnilam4.png?v=1640225660" alt="" />
          </div>
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Alnilam4.png?v=1640225660" alt="" />
          </div>
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Alnilam4.png?v=1640225660" alt="" />
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
  )
}

export default Carousel