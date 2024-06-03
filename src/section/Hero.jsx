import Button from "../components/button";
export default function Hero() {
  return (
    <div className="mt-28 text-center">
      <Button
        text="We just raised $20M in Series B. Learn more"
        className="hover:none mx-auto flex w-[417px] cursor-auto justify-center border-opacity-30 py-2.5"
        invert
      ></Button>
      <h1 className="m-7 text-7xl font-medium text-[#ECECEC]">
        Modern analytics <br />
        <span className="bg-gradient-to-r from-[#ecececbe] to-[#ececec5c] bg-clip-text text-transparent">
          for the modern world
        </span>
      </h1>
      <p className="text-lg font-light text-[#ECECECA6] opacity-95">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse varius enim in eros elementum tristique.
      </p>
      <div className="m-auto mt-8 flex max-w-xl items-center justify-center gap-4 ">
        <Button text="Download the app" className="py-2.5" />
        <Button text="Talk to an expert" invert className="py-2.5 font-light" />
      </div>
    </div>
  );
}
