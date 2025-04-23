import { projects } from "@/data";
import { Pin } from "./Pin";

export const ProjectCards = () => {
  return (
    <div className="project-cards">
      {projects.map((p) => {
        return <Pin key={p.id} {...p}></Pin>;
      })}
    </div>
  );
};
