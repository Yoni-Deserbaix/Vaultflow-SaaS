export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#0B081C] bg-opacity-50 px-10 text-white py-2.5 m-8 rounded-3xl">
        <div className="flex gap-2 text-xl">
          <img
            src="../assets/Valtflow.svg"
            alt="Vaultflow logo"
            className="w-6 h-6"
          />
          <p className="font-bold">Vaultflow</p>
        </div>
        <ul className="flex-row flex gap-16 font-light">
          <li>Features</li>
          <li>Pricing</li>
          <li>About us</li>
        </ul>
        <div className="text-black bg-white py-2 my-1 px-5 rounded-3xl">
          Downloap the app
        </div>
      </div>
    </div>
  );
}
