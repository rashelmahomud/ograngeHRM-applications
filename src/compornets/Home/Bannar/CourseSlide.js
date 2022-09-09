import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (

    <>
      <div className="text-center">
        <h1 className="lg:text-5xl text-3xl my-10">OrangeHRM</h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          "@0.25": {
            slidesPerView: 2,
            spaceBetween: -100,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.25": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}

        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}


        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className="">

          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/XJW4d0t/24.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Zhp2vbP/25.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Zhp2vbP/25.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Qm325MC/30.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/XJW4d0t/24.png" />
          </SwiperSlide>
        </div>

      </Swiper>
    </>
  );
}; SwiperCore.use([Autoplay]);
