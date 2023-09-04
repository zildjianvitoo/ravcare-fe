import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import useBreakpoint from "@/hooks/useBreakPoint";
import { testimoniList } from "@/utils/constant/testimoniList";
import TestimonialCard from "../Card/TestimonialCard";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

export default function TestimoniSwipe() {
  const [testiIndex, setTestiIndex] = useState(0);
  // const breakPoint = useBreakpoint();

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0",
    class: "flex justify-center",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setTestiIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <Slider className="flex justify-center gap-4" {...settings}>
      {testimoniList.map((testi, index) => (
        <TestimonialCard
          key={index}
          testi={testi}
          index={index}
          testiIndex={testiIndex}
        />
      ))}
    </Slider>
  );
}

const NextArrow = ({ onClick }) => {
  return (
    <MdOutlineNavigateNext
      className="absolute right-0 z-10 text-3xl duration-300 cursor-pointer text-primary-ravcare text-secondary-color active:scale-75 top-1/2"
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <MdOutlineNavigateBefore
      className="absolute left-0 z-10 text-3xl duration-300 cursor-pointer text-primary-ravcare text-secondary-color active:scale-75 top-1/2"
      onClick={onClick}
    />
  );
};
