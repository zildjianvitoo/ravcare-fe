import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Button from "../Button/Button";
import AOS from "aos";

export default function Jumbotron() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className=" bg-[#f2f7ff]">
      <div className="container ">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-col">
            <h1
              className="text-[40px] lg:text-[32px] xl:text-[40px] font-bold leading-normal sm:leading-relaxed bg-gradient-to-br bg-clip-text text-transparent from-primary-ravcare to-[#6F3AFA]"
              data-aos="fade-right"
            >
              Rav Care siap melayani keluhan <br /> masyarakat selama 24/7.
            </h1>
            <p
              className="mt-4 text-text-color-ravcare"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Rumah sakit adalah bagian integral dari suatu organisasi sosial
              dan kesehatan <br /> dengan fungsi menyediakan pelayanan paripurna
              (komprehensif).
            </p>
            <Link
              href={"/layanan"}
              className="mt-10 w-fit lg:w-fit"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Button>Lihat Layanan</Button>
            </Link>
          </div>

          <div className="relative mt-4 sm:mt-0">
            <figure data-aos="zoom-in">
              <Image
                src={"/assets/images/LandingPage/landingpage-jumbotron-img.png"}
                alt="Jumbotron Image"
                width={530}
                height={610}
                priority={true}
              />
            </figure>
            <figure
              className="absolute bottom-4"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-once
            >
              <Image
                src={"/assets/images/LandingPage/jumbotron-nametag-img.png"}
                alt="Jumbotron Nametag Image"
                width={230}
                height={70}
                quality={100}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
