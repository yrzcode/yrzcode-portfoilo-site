import { testimonials } from "@/data";
import { InfiniteMovingCards } from "../../ui";
export const Cards = () => {
  return (
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
  );
};
