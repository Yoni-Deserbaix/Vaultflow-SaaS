import Brand from "./section/Brand";
import Hero from "./section/Hero";
import HeroImage from "./section/HeroImage";
import Navbar from "./section/Navbar";

export default function App() {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full bg-[url('./assets/background.png')] bg-top bg-repeat-x">
          <Navbar />
          <div className="mx-auto max-w-4xl">
            <Hero />
          </div>
          <div className="relative z-10 mx-auto mt-12 max-w-5xl">
            <HeroImage />
          </div>
          <div className="-mt-12 bg-[#0b0121]">
            <Brand />
          </div>
        </div>
      </div>
    </div>
  );
}
