import FadeOnScroll from "../components/FadeOnScroll";
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
        <FadeOnScroll delay={0.6}>
          <h1 className="relative z-10 mx-auto max-w-96 text-5xl leading-tight max-md:text-4xl">
            Features that work for your future.
          </h1>
        </FadeOnScroll>
        <FadeOnScroll delay={0.8}>
          <p className="mx-auto max-w-[470px] py-12 text-lg leading-tight">
            Check out our amazing features and experience the power of Vaultflow
            for yourself.
          </p>
        </FadeOnScroll>
      </div>
      <CardsFeatures />
    </div>
  );
}
