export default function CardsFeatures() {
  const cards = [
    {
      src: "./assets/icon/icon01.svg",
      title: "Analytics Dashboard",
      caption:
        "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.",
      viewLink: "View dashboard",
    },
    {
      src: "./assets/icon/icon02.svg",
      title: "Digital Credit Tokens",
      caption:
        "Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.",
      viewLink: "View tokens",
    },
    {
      src: "./assets/icon/icon03.svg",
      title: "Code collaboration",
      caption:
        "Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.",
      viewLink: "View code collaboration",
      imageCode: "./assets/code_card.svg",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
        {cards.slice(0, 2).map((card, index) => (
          <div key={index} className="flex">
            <div className="flex h-full w-full flex-col justify-between rounded-lg bg-indigo-900 p-14">
              <div>
                <img src={card.src} alt="icon" />
                <h1 className="pb-3 pt-4 text-[32px] text-[#ECECEC]">
                  {card.title}
                </h1>
                <p className="text-[#ECECEC]">{card.caption}</p>
              </div>
              <p className="pt-8 text-white underline">{card.viewLink}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex h-full w-full flex-row justify-between rounded-lg bg-indigo-900 p-14 max-lg:mt-6 max-md:flex-col">
        <div className="flex w-1/2 pr-4 max-lg:w-1/2 max-md:w-full">
          <div>
            <img src={cards[2].src} alt="icon" className="mb-4 h-12 w-12" />
            <h1 className="pb-3 pr-8 pt-4 text-[32px] text-[#ECECEC]">
              {cards[2].title}
            </h1>
            <p className="w-full max-w-md text-[#ECECEC] max-sm:w-full">
              {cards[2].caption}
            </p>
            <p className="pt-8 text-white underline">{cards[2].viewLink}</p>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center max-lg:mt-8 max-md:w-full">
          <img
            src={cards[2].imageCode}
            alt="DigitalToken.js code"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
