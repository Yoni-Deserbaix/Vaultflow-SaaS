import FadeUp from "../components/FadeUp";

export default function HeroImage() {
  return (
    <div>
      <FadeUp delay={0.8}>
        <img src="./assets/hero_image.svg" alt="hero image" />
      </FadeUp>
    </div>
  );
}
