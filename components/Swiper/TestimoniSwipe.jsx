import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_image_1 from "../../public/assets/images/LandingPage/facility.png";
import slide_image_2 from "../../public/assets/images/LandingPage/facility.png";
import slide_image_3 from "../../public/assets/images/LandingPage/facility.png";
import slide_image_4 from "../../public/assets/images/LandingPage/facility.png";
import slide_image_5 from "../../public/assets/images/LandingPage/facility.png";
import slide_image_6 from "../../public/assets/images/LandingPage/facility.png";
import slide_image_7 from "../../public/assets/images/LandingPage/facility.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function TestimoniSwipe() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mx-auto swiper_container"
    >
      <SwiperSlide>
        <img
          src={"/assets/images/LandingPage/hospital.jpg"}
          alt="slide_image "
          className="m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"/assets/images/LandingPage/hospital.jpg"}
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"/assets/images/LandingPage/hospital.jpg"}
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"/assets/images/LandingPage/hospital.jpg"}
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"/assets/images/LandingPage/hospital.jpg"}
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"/assets/images/LandingPage/hospital.jpg"}
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"/assets/images/LandingPage/hospital.jpg"}
          alt="slide_image"
        />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
}
