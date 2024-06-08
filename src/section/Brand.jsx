export default function Brand() {
  const brandsLogo = [
    { name: "Dell", src: "./assets/brand/dell_logo.svg" },
    { name: "Zendesk", src: "./assets/brand/zendesk_logo.svg" },
    { name: "Rakuten", src: "./assets/brand/rakuten_logo.svg" },
    { name: "Pacific Funds", src: "./assets/brand/pacificfunds_logo.svg" },
    { name: "NCR", src: "./assets/brand/ncr_logo.svg" },
    { name: "Lattice", src: "./assets/brand/lattice_logo.svg" },
    { name: "TED", src: "./assets/brand/ted_logo.svg" },
  ];

  return (
    <div>
      <p className="pt-36 text-center font-light text-white opacity-80">
        Trusted by teams at over 1,000 of the world’s leading organizations
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        {brandsLogo.map((logo, index) => (
          <div key={index} className="m-4">
            <img src={logo.src} alt={logo.name} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
