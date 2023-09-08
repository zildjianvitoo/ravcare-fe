import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillStar } from "react-icons/ai";

export default function UlasanForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const { register, handleSubmit } = useForm();

  const onSubmitHandler = async (formValues) => {
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h3 className="text-heading-color-ravcare text-[16px] leading-6 font-medium mb-4 ">
        Bagaimana Anda menilai dokter ini?
      </h3>
      <div>
        {[...Array(5).keys()].map((_, index) => {
          index = index + 1;
          return (
            <button
              key={index}
              type="button"
              className={`${
                index <= ((hover && rating) || hover)
                  ? "text-primary-ravcare"
                  : "text-text-color-ravcare"
              } bg-transparent border-none outline-none focus:outline-none text-[22px] cursor-pointer`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              onDoubleClick={() => {
                setRating(0);
                setHover(0);
              }}
            >
              <span>
                <AiFillStar />
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-[30px]">
        {" "}
        <h3 className="text-heading-color-ravcare text-[16px] leading-6 font-medium mb-4 ">
          Bagikan masukan dan ulasan Anda*
        </h3>
        <textarea
          rows="5"
          className="w-full px-4 py-3 border rounded-md border-primary-ravcare focus:outline outline-secondary-ravcare"
          placeholder="Masukan ulasan Anda"
          {...register("ulasan", { required: true })}
        ></textarea>
      </div>
      <button type="submit">Submit Ulasan</button>
    </form>
  );
}
