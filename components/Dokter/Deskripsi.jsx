import { sora } from "@/public/fonts";
import React from "react";
import useFormatedDate from "@/hooks/useFormatedDate";

export default function Deskripsi() {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-heading-color-ravcare font-semibold flex items-center gap-2 ">
          Tentang
          <span className="font-semibold text-primary-ravcare text-[24px] leading-9">
            Zildjian Vito
          </span>
        </h3>
        <p className={`text-para ${sora.className}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          similique ducimus error enim accusantium aliquid dolores unde illum
          expedita iure laudantium blanditiis rem consectetur nam est labore
          velit incidunt, vero exercitationem eaque tenetur. Illum sapiente
          doloribus, perferendis corrupti odio laboriosam?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-heading-color-ravcare font-semibold">
          Pendidikan
        </h3>
        <ul className="pt-4 md:p-5 ">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div className="">
              <span
                className={`text-primary-ravcare text-[15px] leading-6 font-semibold ${sora.className}`}
              >
                4 Oktober 2016
              </span>
              <p
                className={`text-[16px] leading-6  text-text-color-ravcare ${sora.className} `}
              >
                PHD di Bedah
              </p>
            </div>
            <p
              className={`text-[16px] leading-5 text-text-color-ravcare ${sora.className} `}
            >
              Universitas Gajah Mada, Yogyakarta
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div className="">
              <span
                className={`text-primary-ravcare text-[15px] leading-6 font-semibold ${sora.className}`}
              >
                {useFormatedDate("4-10-2016")}
              </span>
              <p
                className={`text-[16px] leading-6  text-text-color-ravcare ${sora.className} `}
              >
                PHD di Bedah
              </p>
            </div>
            <p
              className={`text-[16px] leading-5 text-text-color-ravcare ${sora.className} `}
            >
              Universitas Gajah Mada, Yogyakarta
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
