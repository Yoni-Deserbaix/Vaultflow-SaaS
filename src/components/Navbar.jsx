export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between bg-[#0B081C] bg-opacity-50 px-10 text-white p-5 m-10 rounded-3xl">
        <div className="flex gap-2 text-xl">
          <img
            src="../assets/Valtflow.svg"
            alt="Valtflow logo"
            className="w-6"
          />
          <p className="font-bold">Vaultflow</p>
        </div>
        <ul className="flex-row flex gap-5">
          <li>Features</li>
          <li>Pricing</li>
          <li>About us</li>
        </ul>
        <div>Downloap the app</div>
      </div>
    </div>
  );
}
