import Button from "../components/button";
export default function Hero() {
  return (
    <div className="animate-fade-up mt-28 text-center max-md:mt-12">
      <Button
        text="We just raised $20M in Series B. Learn more"
        className="mx-auto flex max-w-[417px] cursor-default justify-center border-opacity-30 py-2.5 max-sm:mx-auto max-sm:max-w-80 max-sm:p-1.5 max-sm:text-xs"
        invert
      ></Button>
      <h1 className="m-7 text-7xl font-medium text-[#ECECEC] max-md:m-4 max-md:text-4xl">
        Modern analytics <br />
        <span className="bg-gradient-to-r from-[#ecececbe] to-[#ececec5c] bg-clip-text text-transparent">
          for the modern world
        </span>
      </h1>
      <p className="text-lg font-light text-[#ECECECA6] opacity-95 max-md:mx-4 max-md:text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse varius enim in eros elementum tristique.
      </p>
      <div className="m-auto mt-8 flex max-w-xl items-center justify-center gap-4 max-md:mt-4">
        <Button
          text="Download the app"
          className="py-2.5 max-sm:px-3 max-sm:text-xs"
        />
        <Button
          text="Talk to an expert"
          invert
          className="py-2.5 max-sm:px-3 max-sm:text-xs"
        />
      </div>
    </div>
  );
}
