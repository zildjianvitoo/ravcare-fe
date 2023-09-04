import Benefit from "@/components/LandingPage/Benefit";
import CTA from "@/components/LandingPage/CTA";
import DaftarDukungan from "@/components/LandingPage/DaftarDukungan";
import Jumbotron from "@/components/LandingPage/Jumbotron";
import Partner from "@/components/LandingPage/Partner";
import Testimonial from "@/components/LandingPage/Testimonial";

export default function Home() {
  return (
    <main className="bg-[#f9fbfc]">
      <Jumbotron />
      <Partner />
      <DaftarDukungan />

      <Benefit />
      <CTA />
      <Testimonial />
    </main>
  );
}
