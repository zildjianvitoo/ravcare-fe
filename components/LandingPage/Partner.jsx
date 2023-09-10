import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
export default function Partner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="py-12 bg-[#E2EDFF]">
      <div className="flex flex-col items-center justify-center">
        <h3
          className="font-semibold text-[32px] text-[#031432d6]"
          data-aos="fade-down"
        >
          Partner Kami
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          <figure
            className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px] xl:w-[250px] xl:h-[200px] object-cover relative"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <Image
              src={"/assets/images/LandingPage/logo-rsbari.png"}
              alt="RS Bari Logo"
              className="object-contain"
              fill
            />
          </figure>
          <figure
            className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px] xl:w-[250px] xl:h-[200px] object-cover relative"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <Image
              src={"/assets/images/LandingPage/logo-rsakgani.png"}
              alt="RS Bari Logo"
              className="object-contain"
              fill
            />
          </figure>
          <figure
            className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px] xl:w-[250px] xl:h-[200px] object-cover relative"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <Image
              src={"/assets/images/LandingPage/logo-rshermina.png"}
              alt="RS Bari Logo"
              className="object-contain"
              fill
            />
          </figure>
          <figure
            className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px] xl:w-[150px] xl:h-[200px] object-cover relative "
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <Image
              src={"/assets/images/LandingPage/logo-rscharitas.png"}
              alt="RS Bari Logo"
              className="object-contain scale-[0.65] xl:scale-75 xl:-translate-x-8"
              fill
            />
          </figure>
          <figure
            className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px]  xl:w-[250px] xl:h-[200px] object-cover relative"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <Image
              src={"/assets/images/LandingPage/logo-rssiloam.png"}
              alt="RS Bari Logo"
              className="object-contain"
              fill
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
