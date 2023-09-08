import { sora } from "@/public/fonts";
import Button from "../Button/Button";

export default function SidePanel() {
  return (
    <div className="p-3 rounded-[20px]  lg:p-5">
      <div className="flex items-center justify-between">
        <p className="mt-0 font-medium  text-para text-black/[0.85]">
          Harga Ticket
        </p>
        <span className="bg-[#D3E5FB] text-primary-ravcare py-1 px-6 lg:py-2 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">
          Rp. 50.000
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="mt-0 font-medium text-para text-heading-color-ravcare">
          Slot Waktu Tersedia:
        </p>
        <ul className="mt-3">
          <li
            className={`flex items-center justify-between mb-2 ${sora.className}`}
          >
            <p className="text-[15px] leading-6 text-black/[0.85] font-medium">
              Minggu
            </p>
            <p className="text-[15px] leading-6 text-black/[0.85] font-medium">
              10:00 - 12:00
            </p>
          </li>
          <li
            className={`flex items-center justify-between mb-2 ${sora.className}`}
          >
            <p className="text-[15px] leading-6 text-black/[0.85] font-medium">
              Rabu
            </p>
            <p className="text-[15px] leading-6 text-black/[0.85] font-medium">
              14:00 - 18:00
            </p>
          </li>
          <li
            className={`flex items-center justify-between mb-2 ${sora.className}`}
          >
            <p className="text-[15px] leading-6 text-black/[0.85] font-medium">
              Jumat
            </p>
            <p className="text-[15px] leading-6 text-black/[0.85] font-medium">
              19:00 - 21:00
            </p>
          </li>
        </ul>
      </div>
      <Button
        className="w-full px-2 btn bg-gradient-to-r from-primary-ravcare to-secondary-ravcare opacity-80 hover:opacity-100 hover:translate-y-0"
        icon={""}
      >
        Buat Janji Offline
      </Button>
    </div>
  );
}
