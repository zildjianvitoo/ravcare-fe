import React from "react";

import Link from "next/link";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/zildjianvito/",
    icon: <RiLinkedinFill className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://github.com/zildjianvitoo",
    icon: <AiFillGithub className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.instagram.com/zildjianvitoo/",
    icon: <AiOutlineInstagram className="w-4 h-5 group-hover:text-white" />,
  },
];

const quickLinks1 = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/dokter",
    name: "Cari Dokter",
  },
  {
    path: "/layanan",
    name: "Layanan",
  },
  {
    path: "/",
    name: "Blog",
  },
];

const quickLinks2 = [
  {
    path: "/",
    name: "Minta Janji Pertemuan",
  },
  {
    path: "/",
    name: "Cari Lokasi",
  },
  {
    path: "/",
    name: "Minta Pendapat",
  },
  {
    path: "/",
    name: "Konsultasi",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-16 ">
      <div className="container">
        <div className="flex flex-col flex-wrap justify-between md:flex-row  gap-[30px]  ">
          <div>
            <div className="flex ">
              <h3 className="font-semibold text-[32px] bg-gradient-to-br bg-clip-text text-transparent from-primary-ravcare to-secondary-ravcare">
                RavCare.
              </h3>
              <div className="relative ">
                <Image
                  // fill
                  width={56}
                  height={56}
                  src={"/assets/images/health-icon.svg"}
                  alt="Health Icon"
                  className="relative bottom-3 right-4"
                />
              </div>
            </div>
            <p className="text-[16px] leading-7 font-normal text-text-color-ravcare">
              Copyright © RavCare {year} didevelop oleh Pake Nanya all right
              reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="flex items-center justify-center transition duration-200 border rounded-full w-9 h-9 border-secondary-ravcare group hover:bg-primary-ravcare hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-heading-color-ravcare">
              Link Cepat
            </h2>
            <ul className="flex flex-col gap-4">
              {quickLinks1.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-light hover:text-primary-ravcare "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-heading-color-ravcare">
              Saya Ingin
            </h2>
            <ul className="flex flex-col gap-4">
              {quickLinks2.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-light hover:text-primary-ravcare "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-heading-color-ravcare">
              Dukungan
            </h2>
            <ul className="flex flex-col gap-4">
              {quickLinks1.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-light hover:text-primary-ravcare "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
