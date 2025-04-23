type SkillListProps = {
  list: string[];
  addBlank?: "top" | "bottom";
};

export const SkillList = (props: SkillListProps) => {
  const { list, addBlank } = props;

  return (
    <>
      {addBlank === "top" && <BlankItem />}
      {list.map((skill) => {
        return (
          <span key={skill} className="bento-grid-item-contents-words__item">
            {skill}
          </span>
        );
      })}
      {addBlank === "bottom" && <BlankItem />}
    </>
  );
};

const BlankItem = () => (
  <span className="bento-grid-item-contents-words__item--blank" />
);
