import Hero from "./section/Hero";
import Navbar from "./section/Navbar";

export default function App() {
  return (
    <div className="absolute h-[100vh] w-full bg-[url('./assets/background.png')] bg-top">
      <div>
        <Navbar />
        <div className="mx-auto max-w-4xl">
          <Hero />
        </div>
      </div>
    </div>
  );
}
