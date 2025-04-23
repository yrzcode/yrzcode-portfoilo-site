import { Button } from "@/components/ui";
import { workExperience } from "@/data";

export const Works = () => {
  return (
    <div className="works">
      {workExperience.map(({ id, thumbnail, title, desc }) => {
        return (
          <Button
            key={id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="button"
          >
            <div className="thumbnail-container">
              <img src={thumbnail} alt={thumbnail} className="thumbnail" />
              <div className="title-container">
                <h1 className="title">{title}</h1>
                <p className="desc">{desc}</p>
              </div>
            </div>
          </Button>
        );
      })}
    </div>
  );
};
