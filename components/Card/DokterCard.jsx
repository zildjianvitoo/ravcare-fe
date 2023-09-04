import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

export default function DokterCard({ dokter }) {
  const {
    id,
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = dokter;
  return (
    <div className="p-3 lg:p-5">
      <figure>
        <Image
          src={photo}
          alt={"Foto Dokter"}
          width={400}
          height={400}
          quality={100}
          className="rounded-[20px]"
        />
      </figure>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-heading-color-ravcare font-bold mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="flex items-center justify-between mt-2 lg:mt-4">
        <span className="text-primary-ravcare py-1 px-2 lg:py-2 bg-[#D3E5FB] lg:px-6 text-[12px] leading-4 rounded lg:text-[16px] lg:leading-7 font-semibold">
          {specialization}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-heading-color-ravcare">
            <AiFillStar className="text-primary-ravcare text-[18px] lg:text-[20px]" />
            {avgRating}
          </span>
          <span className=" text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-heading-color-ravcare">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-heading-color-ravcare">
            +{totalPatients}
          </h3>
          <p className="text-[14px] leading-6 text-text-color-ravcare">
            {hospital}
          </p>
        </div>
        <Link
          href={`/dokter/${id}`}
          className="w-[44px] h-[44px] rounded-full border border-[#181a1e] flex items-center justify-center group hover:bg-primary-ravcare hover:border-none"
        >
          <BsArrowRight className="w-6 h-5 group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
}
