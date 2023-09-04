import React from "react";
import { dokter } from "@/utils/constant/dokter";
import DokterCard from "../Card/DokterCard";
export default function DokterList() {
  return (
    <section className="pb-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[50px]">
          {dokter.map((item, index) => (
            <DokterCard key={item.id} dokter={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
