import React from "react";

export default function CariDokter() {
  return (
    <section className="bg-[#E2EDFF] pb-10 lg:pb-14">
      <div className="container ">
        <h2 className="text-center heading">Cari Dokter</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#d6dee9] rounded-md flex items-center justify-between">
          <input
            type="search"
            className="w-full py-4 pl-4 pr-2 bg-transparent focus:outline-none placeholder:text-text-color-ravcare placeholder:text-sm sm:placeholder:text-base "
            placeholder="Cari dokter pilihanmu"
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md">Cari</button>
        </div>
      </div>
    </section>
  );
}
