import React from "react";
import TestimoniSwipe from "../Swiper/TestimoniSwipe";

export default function Testimonial() {
  return (
    <section className="mt-8 py-14">
      <div className="container">
        <div className="max-w-[66rem] flex flex-col justify-center gap-12  mx-auto">
          <h3 className="font-semibold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#031432] ">
            {" "}
            Kata Mereka Tentang RavCare
          </h3>
          <TestimoniSwipe />
        </div>
      </div>
    </section>
  );
}
