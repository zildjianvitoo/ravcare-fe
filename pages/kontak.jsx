import Button from "@/components/Button/Button";
import { sora } from "@/public/fonts";
import React from "react";

export default function Kontak() {
  return (
    <main className="bg-[#f9fbfc]">
      <section>
        <div className="max-w-screen-md px-4 mx-auto">
          <h2 className="text-center heading">Hubungi Kami</h2>
          <p
            className={`mb-8 font-light text-center lg:mb-12 text-para ${sora.className}`}
          >
            Terkendala teknis? Ingin memberi masukan mengenai fitur lainnya?
            Beritahu Kami
          </p>
          <form className="">
            <div className="flex flex-col gap-y-6">
              <div>
                <label htmlFor="email" className="form-label">
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="contoh@gmail.com"
                  className="mt-1 form-input"
                />
              </div>

              <div>
                <label htmlFor="subject" className="form-label">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Beritahu kami apa yang bisa kami bantu"
                  className="mt-1 form-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="form-label">
                  Pesan
                </label>
                <textarea
                  rows={"5"}
                  type="text"
                  id="message"
                  placeholder="Tinggalkan pesan..."
                  className="mt-1 form-input"
                />
              </div>
            </div>
            <Button
              type="submit"
              className={
                "btn rounded-md sm:w-fit mt-4 px-12 hover:translate-y-0"
              }
              icon={""}
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
