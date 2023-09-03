import Image from "next/image";
import React from "react";

export default function Partner() {
  return (
    <div className="py-12 bg-[#E2EDFF]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-semibold text-[32px] text-[#031432d6]">
          Partner Kami
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          <figure className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px] xl:w-[250px] xl:h-[200px] object-cover relative">
            <Image
              src={"/assets/images/LandingPage/logo-rsbari.png"}
              alt="RS Bari Logo"
              className="object-contain"
              fill
            />
          </figure>
          <figure className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px] xl:w-[250px] xl:h-[200px] object-cover relative">
            <Image
              src={"/assets/images/LandingPage/logo-rsakgani.png"}
              alt="RS Bari Logo"
              className="object-contain"
              fill
            />
          </figure>
          <figure className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px] xl:w-[250px] xl:h-[200px] object-cover relative">
            <Image
              src={"/assets/images/LandingPage/logo-rshermina.png"}
              alt="RS Bari Logo"
              className="object-contain"
              fill
            />
          </figure>
          <figure className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px] xl:w-[150px] xl:h-[200px] object-cover relative ">
            <Image
              src={"/assets/images/LandingPage/logo-rsmuhammadiyah.webp"}
              alt="RS Bari Logo"
              className="object-contain"
              fill
            />
          </figure>
          <figure className="w-[130px] h-[130px] md:w-[135px] md:h-[110px] lg:w-[175px] lg:h-[150px]  xl:w-[250px] xl:h-[200px] object-cover relative">
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
