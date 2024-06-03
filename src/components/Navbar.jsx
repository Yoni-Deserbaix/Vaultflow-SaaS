export default function Navbar() {
  return (
    <div>
      <div className="m-8 flex items-center justify-between rounded-3xl bg-[#0B081C] bg-opacity-50 px-10 py-2.5 text-white">
        <div className="flex cursor-pointer gap-2 text-xl">
          <img
            src="../assets/Valtflow.svg"
            alt="Vaultflow logo"
            className="h-6 w-6"
          />
          <p className="font-bold">Vaultflow</p>
        </div>
        <ul className="flex flex-row gap-16 font-light">
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
        <div className="my-1 cursor-pointer rounded-3xl bg-white px-5 py-2 text-black transition-all hover:bg-gray-300">
          Downloap the app
        </div>
      </div>
    </div>
  );
}
