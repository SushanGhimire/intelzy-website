import React from "react";
import p1 from "../../assets/images/partners/g1.png";
import p2 from "../../assets/images/partners/g2.png";
import p3 from "../../assets/images/partners/g3.png";
import p4 from "../../assets/images/partners/g4.png";
import p5 from "../../assets/images/partners/g5.png";
import p6 from "../../assets/images/partners/g6.png";
import p7 from "../../assets/images/partners/g7.png";
import p8 from "../../assets/images/partners/g8.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
function PartnerSlider() {
  const logos = [p1, p2, p3, p4, p5, p6, p7, p8];
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {logos.map((logo, index) => {
        return (
          <SwiperSlide className="" key={index}>
            <div className="" key={index}>
              <img
                src={logo}
                className="mx-auto w-32 object-cover dark:bg-gray-900 "
                alt=""
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PartnerSlider;
