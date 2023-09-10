import Button from "@/components/Button/Button";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (formValues) => {
    console.log(formValues);
  };

  return (
    <main className="bg-[#f9fbfc] ">
      <section className="px-5 lg:px-0 py-14">
        <div className="w-full max-w-xl px-3 mx-auto rounded-lg shadow-md md:p-10">
          <h3 className="text-heading-color-ravcare text-[22px] leading-9 font-bold mb-10">
            Halo! <span className="text-primary-ravcare">Selamat Datang </span>
            Kembali🎉
          </h3>
          <form
            className="flex flex-col gap-5 py-4 md:py-0"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <input
              type="email"
              placeholder="Masukkan emailmu"
              className="w-full px-4 py-3 border-b border-secondary-ravcare/80 focus:outline-none focus:border-r-primary-ravcare text-[16px] leading-7 text-heading-color-ravcare placeholder:text-text-color-ravcare rounded-md  focus:border-b-2"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="Kata sandi"
              className="w-full px-4 py-3 border-b border-secondary-ravcare/80 focus:outline-none focus:border-r-primary-ravcare text-[16px] leading-7 text-heading-color-ravcare placeholder:text-text-color-ravcare rounded-md focus:border-b-2 "
              {...register("email", { required: true })}
            />
            <Button
              className="mt-2 text-lg rounded-xl hover:translate-y-0"
              icon={""}
              type="submit"
            >
              Login
            </Button>

            <p className="text-center lg:mt-2 text text-text-color-ravcare">
              Belum memiliki akun?{" "}
              <Link
                href={"/register"}
                className="font-medium text-primary-ravcare"
              >
                Daftar
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
