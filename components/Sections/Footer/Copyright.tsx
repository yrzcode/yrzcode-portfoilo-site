import { socialMedia } from "@/data";

export const Copyright = () => {
  return (
    <div className="copyright-container">
      <p className="copyright">Copyright © 2024. Yang.</p>
      <div className="social-media">
        {socialMedia.map(({ id, img }) => {
          return (
            <div key={id}>
              <img
                src={img}
                alt={img}
                className="image"
                height={20}
                width={20}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
