import Button from "../components/button";
import { cardStyle } from "../components/cardGradient";
export default function HeroNoImage() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl p-4">
        <div
          className="mt-8 flex flex-col justify-center rounded-3xl p-14 text-center text-[#ECECEC]"
          style={cardStyle}
        >
          <div className="mx-auto h-auto max-w-3xl">
            <h1 className="text-5xl font-bold leading-[57px] max-md:text-4xl">
              Our powerful analytics provides invaluable insights.
            </h1>
            <p className="pt-6 text-lg leading-[27px]">
              Unlock the power of data with our cutting-edge analytics product.
              Get instant insights with our user-friendly Analytics Dashboard,
              and take advantage of our innovative digital credit tokens to
              reward your customers and incentivize engagement.
            </p>
            <Button
              text="Download the app"
              invert
              className="mx-auto mt-8 w-48 py-2.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
