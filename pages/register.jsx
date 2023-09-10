import Button from "@/components/Button/Button";
import InputForm from "@/components/Input/InputForm";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Register() {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (formValues) => {
    const { email, password, name, gender, role } = formValues;
    if (!photo) {
      toast.error("Mohon lengkapi data diri anda");
      return;
    }
    if (!gender) {
      toast.error("Jenis Kelamin tidak boleh kosong");
      return;
    }

    console.log({ formValues, photo });
  };

  return (
    <main className="bg-[#f9fbfc] overflow-x-hidden">
      <section className="px-5 lg:px-0 py-14">
        <div className="w-full max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="hidden rounded-l-lg lg:block bg-primary-ravcare">
              <figure className="rounded-l-lg ">
                <img
                  src={"/assets/images/register.svg"}
                  alt="Gif Register"
                  className="w-full rounded-l-lg "
                />
              </figure>
            </div>

            <div className="py-10 rounded-l-lg lg:pl-16">
              <h3 className="text-heading-color-ravcare text-[25px] leading-9 font-bold mb-10">
                Buat{""}
                <span className="text-primary-ravcare"> Akun </span>Baru
              </h3>
              <form
                className="flex flex-col gap-5 py-4 md:py-0"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                <InputForm
                  type={"text"}
                  placeholder={"Nama lengkap"}
                  labelFor={"name"}
                  isError={errors?.name}
                  register={register}
                />
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
                <div className="flex flex-col items-center justify-start mb-5 mr-auto md:mr-0 md:justify-between md:flex-row">
                  <label
                    htmlFor="role"
                    className="font-semibold text-heading-color-ravcare text-[16px] leading-7 mr-auto"
                  >
                    Sebagai
                    <select
                      id="role"
                      className="text-heading-color-ravcare font-medium text-[15px] leading-7 px-4 py-3 focus:outline-none  bg-[#f9fbfc] "
                      {...register("role", { required: true })}
                    >
                      <option value="patient">Pasien</option>
                      <option value="doctor">Dokter</option>
                    </select>
                  </label>
                  <label
                    htmlFor="gender"
                    className="font-semibold text-heading-color-ravcare text-[16px] leading-7 "
                  >
                    Jenis Kelamin
                    <select
                      id="gender"
                      className="text-heading-color-ravcare font-medium text-[15px] leading-7 px-4 py-3 focus:outline-none  bg-[#f9fbfc] "
                      {...register("gender")}
                    >
                      <option value="" hidden selected>
                        Pilih
                      </option>
                      <option value="male">Laki-laki</option>
                      <option value="female">Perempuan</option>
                    </select>
                  </label>
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <figure className="relative flex items-center justify-center w-[68px] h-[68px] border-2 rounded-full border-primary-ravcare xxs:w-16 xxs:h-16">
                    <Image
                      src={"/assets/images/avatar-icon.png"}
                      alt={"Avatar"}
                      width={60}
                      height={60}
                      className="w-full rounded-full"
                    />
                  </figure>
                  <div className="relative w-[130px] h-[50px] ">
                    <input
                      type="file"
                      name="photo"
                      id="customFile"
                      accept=".png,.jpg"
                      className="top-0 left-0 hidden h-full opacity-0 cursor-pointer"
                      onChange={handlePhotoChange}
                    />
                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6  bg-[#4e99f4] text-white font-medium rounded-lg truncate cursor-pointer "
                    >
                      <p className="mx-auto">Upload Foto</p>
                    </label>
                  </div>
                </div>

                <Button
                  className="mt-2 text-lg rounded-xl hover:translate-y-0"
                  icon={""}
                  type="submit"
                >
                  Daftar
                </Button>

                <p className="text-center lg:mt-2 text text-text-color-ravcare">
                  Sudah memiliki akun?{" "}
                  <Link
                    href={"/login"}
                    className="font-medium text-primary-ravcare"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
