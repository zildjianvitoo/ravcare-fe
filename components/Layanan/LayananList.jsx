import React from "react";
import LayananCard from "../Card/LayananCard";
import { layanan } from "@/utils/constant/layanan";

export default function LayananList() {
  return (
    <section className="pb-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-5">
          {layanan.map((item, index) => (
            <LayananCard key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
