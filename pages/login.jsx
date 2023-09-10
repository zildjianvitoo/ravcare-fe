import Button from "@/components/Button/Button";
import InputForm from "@/components/Input/InputForm";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (formValues) => {
    console.log(formValues);
  };

  return (
    <main className="bg-[#f9fbfc] overflow-x-hidden">
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
            <InputForm
              type={"email"}
              placeholder={"Email"}
              labelFor={"email"}
              isError={errors?.email}
              register={register}
            />
            <InputForm
              type={"password"}
              placeholder={"Kata sandi"}
              labelFor={"password"}
              isError={errors?.password}
              register={register}
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
