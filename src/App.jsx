import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
