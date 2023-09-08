import useFormatedDate from "@/hooks/useFormatedDate";
import { sora } from "@/public/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import UlasanForm from "./UlasanForm";

export default function Ulasan() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-semibold text-heading-color-ravcare mb-[30px]">
          Semua Ulasan (156)
        </h4>
        <div className="flex justify-between xs:gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="relative w-12 h-12 rounded-full xxs:w-10 xxs:h-10">
              <Image
                src={"/assets/images/avatar-icon.png"}
                alt={"Avatar"}
                width={40}
                height={40}
                className=" xxs:w-full"
              />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primary-ravcare font-semibold">
                Raihan Yep
              </h5>
              <p className="text-[14px] leading-6 text-text-color-ravcare ">
                {useFormatedDate("02-16-2023")}
              </p>

              <p
                className={`text-para mt-3 font-normal text-[15px] ${sora.className}`}
              >
                Layanannya Bagus,Sangat Rekomen
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} className="text-primary-ravcare" />
            ))}
          </div>
        </div>
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Beri Ulasan
          </button>
        </div>
      )}
      {showFeedbackForm && <UlasanForm />}
    </div>
  );
}
