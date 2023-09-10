import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect } from "react";
import { sora } from "@/public/fonts";
import Link from "next/link";
import Button from "../Button/Button";
import { RiHealthBookLine } from "react-icons/ri";
import AOS from "aos";
export default function DaftarDukunganCard({
  index,
  icon,
  title,
  description,
  bgStyle = "",
  withImage,
}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="flex flex-col p-6 bg-white md:p-8 rounded-3xl layanan-card-shadow "
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div
        className={cn(
          "grid w-20 h-20 rounded-full place-items-center",
          bgStyle
        )}
      >
        {withImage ? (
          <Image
            src={"/assets/images/LandingPage/doctor-icon.svg"}
            alt="Doctor Icon"
            width={50}
            height={50}
          />
        ) : (
          icon
        )}
      </div>
      <h4
        className="mt-6 text-2xl font-medium"
        data-aos="fade-left"
        data-aos-delay={index * 100}
      >
        {title}
      </h4>

      <p
        className={`mt-3 line-clamp-3 text-text-color-ravcare w-[240px] xxs:w-[300px] xs:w-[330px] ${sora.className}`}
        data-aos="fade-left"
        data-aos-delay={index * 100}
      >
        {description}
      </p>
      <Link
        href={"/reservasi"}
        className="mt-6 "
        data-aos="fade-left"
        data-aos-delay={index * 100}
      >
        <Button
          icon={<RiHealthBookLine className="mb-0.5 text-2xl" />}
          className={"text-lg"}
        >
          Reservasi
        </Button>
      </Link>
    </div>
  );
}
