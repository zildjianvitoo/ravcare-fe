import React from "react";
import { PiStethoscopeDuotone } from "react-icons/pi";
import { sora } from "@/public/fonts";
import { cn } from "@/utils/cn";

function Button({
  className,
  icon = <PiStethoscopeDuotone className="text-2xl" />,
  children,
}) {
  return (
    <button
      className={cn(
        "bg-gradient-to-r from-primary-ravcare to-secondary-ravcare opacity-90 hover:opacity-100 hover:-translate-y-1 transition-all duration-200 text-sm lg:text-base w-full py-2 px-7 h-14 text-white font-semibold flex items-center justify-center rounded-[100px] gap-2 button-shadow" +
          sora.className,
        className
      )}
    >
      {icon} <p>{children}</p>
    </button>
  );
}

export default Button;
