import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";
import { sora } from "@/public/fonts";
import Link from "next/link";
import Button from "../Button/Button";
import { RiHealthBookLine } from "react-icons/ri";

export default function DaftarDukunganCard({
  icon,
  title,
  description,
  bgStyle = "",
  withImage,
}) {
  return (
    <div className="flex flex-col p-6 bg-white md:p-8 rounded-3xl layanan-card-shadow ">
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
      <h4 className="mt-6 text-2xl font-medium">{title}</h4>

      <p
        className={`mt-3 line-clamp-3 text-text-color-ravcare w-[240px] xxs:w-[300px] xs:w-[330px] ${sora.className}`}
      >
        {description}
      </p>
      <Link href={"/reservasi"} className="mt-6 ">
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
