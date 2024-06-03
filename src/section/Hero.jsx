import Button from "../components/button";

export default function Hero() {
  return (
    <div className="mt-28 text-center">
      <p className="font-light text-[#F2F4F8]">
        We just raised $20M in Series B. Learn more
      </p>
      <h1 className="text-7xl font-medium text-[#ECECEC]">
        Modern analytics <br /> <span>for the modern world</span>
      </h1>
      <p className="text-lg font-light text-[#ECECECA6] opacity-95">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse varius enim in eros elementum tristique.
      </p>
      <div className="m-auto flex max-w-xl items-center justify-center gap-4">
        <Button text="Download the app" className="py-3" />
        <Button
          text="Talk to an expert"
          colorStyle
          className="py-3 font-light"
        />
      </div>
    </div>
  );
}
