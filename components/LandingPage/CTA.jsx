import { sora } from "@/public/fonts";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import { IoCalendarOutline } from "react-icons/io5";
import { RiHealthBookLine } from "react-icons/ri";

export default function CTA() {
  return (
    <section className="py-14">
      <div className="container">
        <div className="flex flex-col items-center justify-center rounded-[32px] bg-gradient-to-r from-primary-ravcare to-secondary-ravcare shadow-2xl shadow-[#3F87F7]/[20%] px-6 w-full py-16 text-center">
          <h3 className="font-semibold text-[26px] xs:text-[32px] md:text-2xl  lg:text-[32px] text-white ">
            {" "}
            Reservasi Pelayanan Kami Sekarang
          </h3>
          <p className={`mt-4 text-white max-w-[800px] ${sora.className} mt-5`}>
            Pelayanan terbaik dari para ahli medis yang berpengalaman dari kami
            siap melayani Anda dengan kualitas terdepan untuk menjaga kesehatan
            dan kesejahteraan Anda.
          </p>
          <div className="flex flex-col items-center gap-8 mt-10 xs:flex-row">
            <Link href="/dokter" className="w-[95%] xs:w-fit">
              <Button
                className={
                  "text-sm xs:text-base bg-none border border-white hover:bg-white hover:text-primary-ravcare group"
                }
                icon={
                  <IoCalendarOutline className="mb-1 text-2xl text-white group-hover:text-primary-ravcare " />
                }
              >
                Cek Jadwal Dokter
              </Button>
            </Link>
            <Link href={"/reservasi"} className="w-[95%] xs:w-fit">
              <Button
                className="text-base from-white to-white text-primary-ravcare"
                icon={
                  <RiHealthBookLine
                    className="text-2xl mb-0.5 text-primary-ravcare
                "
                  />
                }
              >
                Reservasi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
