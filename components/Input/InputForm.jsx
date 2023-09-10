import { cn } from "@/utils/cn";
import React from "react";

export default function InputForm({
  type,
  placeholder,
  register,
  className,
  labelFor,
  isError,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "w-full px-4 py-3 border-b border-secondary-ravcare/80 focus:outline-none focus:border-r-primary-ravcare text-[16px] leading-7 text-heading-color-ravcare placeholder:text-text-color-ravcare shadow focus:border-b-2",
        className,
        {
          "border-red-500 border-b-2": isError,
        }
      )}
      {...register(labelFor, { required: true })}
    />
  );
}
