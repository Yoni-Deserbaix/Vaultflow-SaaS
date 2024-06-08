import Features from "./section/Features";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import HeroImage from "./section/HeroImage";
import HeroNoImage from "./section/HeroNoImage";
import Navbar from "./section/Navbar";
import Partner from "./section/Partner";

export default function App() {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full bg-[url('../public/assets/background.png')] bg-top bg-repeat-x">
          <Navbar />
          <div className="mx-auto max-w-4xl">
            <Hero />
          </div>
          <div className="relative z-10 mx-auto mt-12 max-w-4xl">
            <HeroImage />
          </div>
          <div className="-mt-12 bg-[#0b0121]">
            <Partner />
            <Features />
            <HeroNoImage />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
