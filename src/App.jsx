import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-[url('./assets/background.png')] w-full h-[100vh] bg-top absolute ">
      <div>
        <Navbar />
      </div>
    </div>
  );
}
