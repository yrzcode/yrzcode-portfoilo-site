import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

type PinProps = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

export const Pin = (props: PinProps) => {
  const { id, title, des, img, iconLists, link } = props;
  return (
    <div className="project-card__pin">
      <PinContainer title={link} href={link}>
        <div className="project-card__pin-img-container">
          <div className="project-card__pin-img-inner">
            <img src={img} alt={title} />
          </div>
        </div>
        <h1 className="project-card__pin-title">{title}</h1>
        <p className="project-card__pin-content">{des}</p>
        <div className="project-card__pin-action">
          <div className="project-card__pin-icons">
            {iconLists.map((icon, index) => (
              <div
                key={icon}
                className="icon"
                style={{ transform: `translateX(-${index * 10}px)` }}
              >
                <img src={icon} alt={icon} className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex-center">
            <p>Check Live Site</p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};
