export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#0B081C] bg-opacity-50 px-10 text-white py-2.5 m-8 rounded-3xl">
        <div className="flex gap-2 text-xl cursor-pointer">
          <img
            src="../assets/Valtflow.svg"
            alt="Vaultflow logo"
            className="w-6 h-6"
          />
          <p className="font-bold">Vaultflow</p>
        </div>
        <ul className="flex-row flex gap-16 font-light">
          <li className=" hover:text-gray-300 transition-all cursor-pointer">
            Features
          </li>
          <li className=" hover:text-gray-300 transition-all cursor-pointer">
            Pricing
          </li>
          <li className=" hover:text-gray-300 transition-all cursor-pointer">
            About us
          </li>
        </ul>
        <div className="text-black bg-white py-2 my-1 px-5 rounded-3xl cursor-pointer transition-all hover:bg-gray-300">
          Downloap the app
        </div>
      </div>
    </div>
  );
}
