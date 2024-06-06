import { cardStyle } from "../components/cardGradient";
import cardsData from "../data";

export default function CardsFeatures() {
  const { cardsData: card } = cardsData;

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
        {card.slice(0, 2).map((card, index) => (
          <div key={index} className="flex">
            <div
              className="flex h-full w-full flex-col justify-between rounded-3xl p-14"
              style={cardStyle}
            >
              <div>
                <img
                  src={card.src}
                  alt="icon"
                  style={card.shadow}
                  className="w-[50px] rounded-lg"
                />
                <h1 className="pb-3 pt-4 text-[32px] text-[#ECECEC]">
                  {card.title}
                </h1>
                <p className="text-[#ECECEC]">{card.caption}</p>
              </div>
              <p className="mt-8 cursor-pointer text-white underline">
                {card.viewLink}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-20 flex h-full w-full flex-row justify-between rounded-3xl p-14 max-lg:mt-6 max-md:flex-col"
        style={cardStyle}
      >
        <div className="flex w-1/2 pr-4 max-lg:w-1/2 max-md:w-full">
          <div>
            <img
              src={card[2].src}
              alt="icon"
              style={card[2].shadow}
              className="w-[50px] rounded-lg"
            />
            <h1 className="pb-3 pr-8 pt-4 text-[32px] text-[#ECECEC]">
              {card[2].title}
            </h1>
            <p className="w-full max-w-md text-[#ECECEC] max-sm:w-full">
              {card[2].caption}
            </p>
            <p className="mt-8 cursor-pointer text-white underline">
              {card[2].viewLink}
            </p>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center max-lg:mt-8 max-md:w-full">
          <img
            src={card[2].imageCode}
            alt="DigitalToken.js code"
            style={cardStyle}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
