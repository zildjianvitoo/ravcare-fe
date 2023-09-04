import { sora } from "@/public/fonts";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function LayananCard({ item, index }) {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-heading-color-ravcare font-bold">
        {name}
      </h2>
      <p
        className={`text-[16px] leading-7 font-normal text-text-color-ravcare line-clamp-3 mt-4 ${sora.className}`}
      >
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <Link
          href={"/dokter"}
          className="w-[44px] h-[44px] rounded-full border border-[#181a1e]  flex items-center justify-center group hover:bg-primary-ravcare hover:border-none"
        >
          <BsArrowRight className="w-6 h-5 group-hover:text-white" />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-semibold"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
}
