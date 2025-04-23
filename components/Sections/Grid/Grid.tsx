import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./BentoGrid/BentoGrid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => {
          const { id } = item;
          return <BentoGridItem key={id} {...item} />;
        })}
      </BentoGrid>
    </section>
  );
};
