import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiMenu } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import { sora } from "@/public/fonts";
import { PiStethoscopeDuotone } from "react-icons/pi";
import Button from "../Button/Button";
import { GrClose } from "react-icons/gr";

const navLinks = [
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
    path: "/kontak",
    name: "Kontak",
  },
];

export default function Navbar() {
  const router = useRouter();

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList?.add("sticky-navbar");
      } else {
        headerRef.current?.classList?.remove("sticky-navbar");
      }
    });
  };

  useEffect(() => {
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show-menu");
  };

  return (
    <header
      className={`flex items-center header ${sora.className}`}
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
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
                className="relative top-4 right-4"
              />
            </div>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center menu gap-[2.7rem]">
              <GrClose className="absolute block text-2xl top-9 right-7 lg:hidden" />

              <Link href={"/register"} className="block sm:hidden">
                <Button>Register Pasien</Button>
              </Link>
              {navLinks.map((link, index) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${
                      router.pathname === link.path
                        ? "text-primary-ravcare "
                        : "text-text-color-ravcare    hover:text-primary-ravcare "
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link href={"/"}>
                <figure className="w-[35px] h-[35px] relative rounded-full">
                  <Image
                    src={"/assets/images/avatar-icon.png"}
                    alt="foto profil pengguna"
                    fill
                    className="rounded-full"
                  />
                </figure>
              </Link>
            </div>

            <Link href={"/register"} className="hidden sm:block">
              <Button>Register Pasien</Button>
            </Link>
            <span className="lg:hidden" onClick={toggleMenu}>
              <BiMenu className="w-8 h-8 cursor-pointer " />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
