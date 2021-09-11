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
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      //   spaceBetween={10}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 4,
        },
        1024: {
          width: 1024,
          slidesPerView: 5,
        },
        1200: {
          width: 1200,
          slidesPerView: 5,
        },
        1440: {
          width: 1400,
          slidesPerView: 6,
        },
      }}
      //   slidesPerView={9}
    >
      {logos.map((logo, index) => {
        return (
          <SwiperSlide className="" key={index}>
            <div className="" key={index}>
              <img src={logo} className="mx-auto w-32 object-cover" alt="" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PartnerSlider;
