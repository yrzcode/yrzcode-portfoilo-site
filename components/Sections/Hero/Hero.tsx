import { Words } from "./Words";
import { Spotlights } from "./Spotlights";
import { BgGrid } from "./BgGrid";

export const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <Spotlights />
      <BgGrid />
      <Words />
    </section>
  );
};
