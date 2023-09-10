import DaftarDukunganCard from "../Card/DaftarDukunganCard";
import AOS from "aos";
import { RiHospitalLine } from "react-icons/ri";
import { BsHeartPulse } from "react-icons/bs";
import { sora } from "@/public/fonts";

const daftarDukungan = [
  {
    id: 23244,
    title: "RS 24 Jam",
    description:
      "Rumah Sakit Kami buka 24 jam,layanan terdepan untuk kesehatan anda dan Keluarga Anda",
    bgIconColor: "bg-[#f3effb]",
    icon: <RiHospitalLine className="text-[40px] text-[#855FCE]" />,
    withImage: false,
  },
  {
    id: 2424,
    title: "Medical Check Up",
    description:
      "Pemeriksaan kesehatan terbaik, layanan medis komprehensif untuk Kesejahteraan Anda",
    bgIconColor: "bg-[#eaf7f0]",
    icon: <BsHeartPulse className="text-[40px] text-[#27AE60]" />,
    withImage: false,
  },
  {
    id: 2422214,
    title: "Profesional Dokter",
    description:
      "Dokter profesional berkualitas, pengalaman medis terpercaya untuk kesehatan optimal Anda",
    bgIconColor: "bg-[#ebf3fe]",
    withImage: true,
  },
];

export default function DaftarDukungan() {
  return (
    <section className="py-10 lg:py-28">
      <div className="container ">
        <div className="flex flex-col ">
          <div className="flex flex-col justify-between lg:flex-row">
            <h3
              className="font-semibold text-[32px] text-[#031432] aos-init aos-animate"
              data-aos="zoom-in-right"
            >
              Daftar Dukungan
            </h3>
            <p
              className={`text-text-color-ravcare ${sora.className} mt-4 lg:mt-0 aos-init aos-animate`}
              data-aos="zoom-in-left"
            >
              Rumah sakit adalah bagian integral dari suatu organisasi sosial
              dan <br /> kesehatan dengan fungsi menyediakan pelayanan paripurna{" "}
              <br />
              (komprehensif).
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-14 lg:flex-row gap-9">
            {daftarDukungan.map((item, index) => (
              <DaftarDukunganCard
                key={item.id}
                index={index + 1}
                icon={item.icon}
                title={item.title}
                bgStyle={item.bgIconColor}
                description={item.description}
                withImage={item.withImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
