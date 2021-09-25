import React from "react";
import carbonpay from "../../assets/images/partners/carbonpay.png";
import garvi from "../../assets/images/partners/garvi.png";
import maharani from "../../assets/images/partners/maharani.png";
import shine from "../../assets/images/partners/shine.png";
import mf from "../../assets/images/partners/mf.png";
import eatwell from "../../assets/images/partners/eatwell.png";
import retail from "../../assets/images/partners/retail.svg";
import renaissance from "../../assets/images/partners/renaissance.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
function PartnerSlider() {
  const logos = [
    {
      img: carbonpay,
      link: "https://joincarbonpay.com/",
    },
    {
      img: maharani,
      link: "https://maharanithreads.com/",
    },
    {
      img: retail,
      link: "https://retailscout.io/",
    },
    {
      img: shine,
      link: "https://shineautomate.com/",
    },
    {
      img: mf,
      link: "https://mindfoundry.co/",
    },
    {
      img: renaissance,
      link: "https://newrenaissance.io/",
    },
    {
      img: eatwell,
      link: "https://eatwellrestro.com/",
    },
    {
      img: garvi,
      link: "https://garvimedical.com/static/img/garvi/garvi.png",
    },
  ];
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
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {logos.map((logo, index) => {
        return (
          <SwiperSlide className="flex items-center" key={index}>
            <a href={logo.link} target="new tab " className="" key={index}>
              <img
                src={logo.img}
                className="mx-auto dark:bg-gray-900 h-16"
                alt=""
              />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PartnerSlider;
