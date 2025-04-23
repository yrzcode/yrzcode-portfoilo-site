import { companies } from "@/data";

export const Companies = () => {
  return (
    <div className="companies">
      {companies.map(({ id, img, name, nameImg }, index) => {
        return (
          <div key={id} className="company">
            <img src={img} alt={name} className="image" />
            <img src={nameImg} alt={name} className="nameImage" />
          </div>
        );
      })}
    </div>
  );
};
