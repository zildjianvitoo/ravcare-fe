import Benefit from "@/components/LandingPage/Benefit";
import DaftarLayanan from "@/components/LandingPage/DaftarLayanan";
import Jumbotron from "@/components/LandingPage/Jumbotron";
import Partner from "@/components/LandingPage/Partner";

export default function Home() {
  return (
    <main className="bg-[#f9fbfc]">
      <Jumbotron />
      <Partner />
      <DaftarLayanan />

      <Benefit />
    </main>
  );
}
