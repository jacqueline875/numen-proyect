import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselChico = () => {
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
        <div >
            <p className="mb-8 text-center text-3xl font-bold text-silver">¡Mirá nuestros productos!</p>
            <div className='bg-gradient-to-b from-purple to-gray-900 rounded-lg' style={{ width: "80vw", margin: "auto" }}>
                <h2>  </h2>
                <Slider {...settings}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Shake-1_854001c4-61f8-4ebb-a318-2e6af38b721f_400x.png?v=1645549218" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Crux-1.png?v=1636045676" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Alnilam4.png?v=1640225660" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0490/7191/5158/products/Crux-1.png?v=1636045676" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default CarouselChico