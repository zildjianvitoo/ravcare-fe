import { sora } from "@/public/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import { RiHealthBookLine } from "react-icons/ri";
import AOS from "aos";

export default function Benefit() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="py-14">
      <div className="container flex flex-col gap-y-[144px]">
        <div className="flex flex-col justify-between lg:items-center md:gap-x-10 lg:gap-x-20 md:flex-row">
          <figure className="relative">
            <Image
              src={"/assets/images/LandingPage/hospital.jpg"}
              alt="Klinik Image"
              width={550}
              height={420}
              className=" rounded-[32px] shadow-2xl shadow-[#3F87F7]/[20%] "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
            <Image
              src={"/assets/images/LandingPage/quality.png"}
              alt="Klinik Image"
              width={260}
              height={80}
              quality={100}
              className="opacity-95 hover:opacity-100 rounded-lg shadow-2xl shadow-[#3F87F7]/[20%] absolute hidden xl:block -right-[3rem] bottom-8"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
          </figure>
          <div className="flex flex-col px-1 mt-8 md:mt-0">
            <h3
              className="font-semibold text-[26px] xs:text-[32px] md:text-2xl  lg:text-[32px] text-[#031432] "
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {" "}
              Pelayanan terbaik dari para Ahli Medis
            </h3>
            <p
              className={`mt-4 text-text-color-ravcare max-w-[500px] ${sora.className}`}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Pelayanan terbaik dari para ahli medis yang berpengalaman dari
              kami siap melayani Anda dengan kualitas terdepan untuk menjaga
              kesehatan dan kesejahteraan Anda.
            </p>
            <Link
              href={"/reservasi"}
              className="w-fit lg:w-[30%]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <Button
                className="mt-8 text-base hover:translate-y-0"
                icon={
                  <RiHealthBookLine
                    className="text-2xl mb-0.5
                "
                  />
                }
              >
                Reservasi
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between lg:items-center md:gap-x-10 lg:gap-x-20 md:flex-row-reverse">
          <figure className="">
            <Image
              src={"/assets/images/LandingPage/facility.png"}
              alt="Klinik Image"
              width={550}
              height={420}
              quality={100}
              //   className="xs:w-[400px] lg:w-[550px]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
          </figure>
          <div className="flex flex-col px-1 mt-8 md:mt-0">
            <h3
              className="font-semibold text-[26px] xs:text-[32px] md:text-2xl md:!leading-[1.53] max-w-[600px]  lg:text-[32px] text-[#031432] "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {" "}
              Fasilitas Mewah yang memanusiakan manusia
            </h3>
            <p
              className={`mt-4 text-text-color-ravcare max-w-[500px] ${sora.className}`}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Fasilitas mewah dengan pelayanan yang ramah, kami hadir untuk
              memanjakan Anda dengan kenyamanan, kualitas, dan pengalaman
              terbaik. Pelanggan adalah prioritas kami.
            </p>
            <Link
              href={"/reservasi"}
              className="w-fit  lg:w-[30%]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Button
                className="mt-8 text-base hover:translate-y-0"
                icon={
                  <RiHealthBookLine
                    className="text-2xl mb-0.5
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
