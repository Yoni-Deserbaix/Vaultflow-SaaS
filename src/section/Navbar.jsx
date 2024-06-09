import Button from "../components/button";
import FadeDown from "../components/FadeDown";

export default function Navbar() {
  return (
    <div>
      <FadeDown delay={0}>
        <div className="m-8 flex items-center justify-between rounded-3xl bg-[#0B081C] bg-opacity-50 px-10 py-2.5 text-[#ECECEC] max-sm:mx-2 max-sm:px-5 max-sm:py-1.5">
          <div className="flex cursor-pointer gap-2 text-xl">
            <img
              src="../assets/Vaultflow.svg"
              alt="Vaultflow logo"
              className="h-6 w-6"
            />
            <p className="font-bold leading-6">Vaultflow</p>
          </div>
          <ul className="flex flex-row gap-16 font-light max-md:hidden">
            <li className="cursor-pointer transition-all hover:text-gray-300">
              Features
            </li>
            <li className="cursor-pointer transition-all hover:text-gray-300">
              Pricing
            </li>
            <li className="cursor-pointer transition-all hover:text-gray-300">
              About us
            </li>
          </ul>
          <Button
            text="Download the app"
            className="max-sm:px-2 max-sm:text-xs"
          />
        </div>
      </FadeDown>
    </div>
  );
}
