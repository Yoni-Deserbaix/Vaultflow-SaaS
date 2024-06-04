import CardsFeatures from "./CardsFeatures";

export default function Features() {
  return (
    <div>
      <div className="relative m-20 text-center text-white">
        <img
          src="./assets/blur.png"
          alt=""
          className="absolute -top-16 left-0 right-0 m-auto w-[470px] transform"
        />
        <h1 className="relative z-10 mx-auto max-w-96 text-5xl leading-tight">
          Features that work for your future.
        </h1>
        <p className="mx-auto max-w-[470px] py-12 text-lg leading-tight">
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>
      </div>
      <CardsFeatures />
    </div>
  );
}
