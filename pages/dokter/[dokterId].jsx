import Deskripsi from "@/components/Dokter/Deskripsi";
import SidePanel from "@/components/Dokter/SidePanel";
import Ulasan from "@/components/Dokter/Ulasan";
import { sora } from "@/public/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function DokterDetail() {
  const [activeTab, setActiveTab] = useState("deskripsi");

  return (
    <main className="py-14 bg-[#f9fbfc]">
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex flex-col items-center gap-5 sm:flex-row w-fit">
              <figure className="self-start">
                <Image
                  width={300}
                  height={300}
                  src={"/assets/images/doctor-img01.jpg"}
                  alt="Foto Dokter"
                  className="rounded-[20px] object-cover items-start"
                />
              </figure>
              <div>
                <span className="bg-[#D3E5FB] text-primary-ravcare py-1 px-6 lg:py-2 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">
                  Ahli Bedah
                </span>
                <h3 className="text-heading-color-ravcare text-[22px] leading-9 mt-3 font-semibold">
                  Zildjian Vito
                </h3>
                <div className="flex items-center gap-[6px] ">
                  <span className="flex gap-[6px] items-center text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-heading-color-ravcare">
                    <AiFillStar className="text-primary-ravcare text-[18px] lg:text-[20px]" />{" "}
                    4.9
                  </span>
                  <span className="flex gap-[6px] items-center text-[14px] leading-5 lg:text-[16px] lg:leading-7  text-text-color-ravcare">
                    (512)
                  </span>
                </div>
                <p
                  className={`text-para text-[14px] max-w-xs s leading-5 md:text-[15px] lg:max-w-sm ${sora.className}`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, omnis.
                </p>
              </div>
            </div>
            <div className="mt-[50px] flex justify-between xs:justify-start border-b border-[#D3E5FB]">
              <button
                onClick={() => setActiveTab("deskripsi")}
                className={cn(
                  " py-2 px-5 mr-5 text-[16px] leading-7 text-heading-color-ravcare font-semibold",
                  {
                    "text-primary-ravcare border-b border-primary-ravcare":
                      activeTab === "deskripsi",
                  }
                )}
              >
                Deskripsi
              </button>
              <button
                onClick={() => setActiveTab("ulasan")}
                className={cn(
                  "py-2 px-5 mr-5 text-[16px] leading-7 text-heading-color-ravcare font-semibold",
                  {
                    "text-primary-ravcare border-b border-primary-ravcare":
                      activeTab === "ulasan",
                  }
                )}
              >
                Ulasan
              </button>
            </div>

            <div className="mt-[50px]">
              {activeTab === "deskripsi" ? <Deskripsi /> : <Ulasan />}
            </div>
          </div>
          <div className="rounded-[20px] shadow-lg h-fit">{<SidePanel />}</div>
        </div>
      </div>
    </main>
  );
}
