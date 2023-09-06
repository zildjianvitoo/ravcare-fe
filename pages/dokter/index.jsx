import CariDokter from "@/components/Dokter/CariDokter";
import DokterList from "@/components/Dokter/DokterList";
import Testimonial from "@/components/LandingPage/Testimonial";
import React from "react";

export default function Dokter() {
  return (
    <main className="bg-[#f9fbfc]">
      <CariDokter />
      <DokterList />
      <Testimonial />
    </main>
  );
}
