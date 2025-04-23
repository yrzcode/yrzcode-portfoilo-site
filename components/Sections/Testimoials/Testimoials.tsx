import { Title } from "./Title";
import { Cards } from "./Cards";
import { Companies } from "./Companies";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <Title />
      <div className="container">
        <Cards />
        <Companies />
      </div>
    </section>
  );
};
