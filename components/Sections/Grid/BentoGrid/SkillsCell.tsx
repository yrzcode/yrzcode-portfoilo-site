import { SkillList } from "./SkillList";

export const Skills = () => {
  return (
    <div className="bento-grid-item-contents-words__container">
      <div className="bento-grid-item-contents-words__col-container">
        <SkillList
          list={["React.js", "Next.js", "TypeScript"]}
          addBlank="bottom"
        />
      </div>
      <div className="bento-grid-item-contents-words__col-container">
        <SkillList list={["Node.js", "AWS", "Mongodb"]} addBlank="top" />
      </div>
    </div>
  );
};
