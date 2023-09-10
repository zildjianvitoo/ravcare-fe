import LayananList from "@/components/Layanan/LayananList";
import { sora } from "@/public/fonts";
import React from "react";

export default function Layanan() {
  return (
    <main className="bg-[#f9fbfc]">
      <section>
        <div className="flex flex-col mx-auto text-center">
          <h1 className="text-center heading">Layanan Kami</h1>
          <p className={`font-light text-center  text-para ${sora.className}`}>
            kami menyediakan beragam layanan unggulan untuk kepuasan Anda
          </p>
        </div>
        <LayananList />
      </section>
    </main>
  );
}
