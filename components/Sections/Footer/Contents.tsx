import { FaLocationArrow } from "react-icons/fa";
import { MagicButton } from "../../ui/MagicButton";
export const Contents = () => {
  return (
    <div className="footer-contents-container">
      <h1 className="heading title">
        Ready to take <span className="text-purple">your</span> digital presence
        to the next level
      </h1>
      <p className="desc">
        Reach out to me today and let&apos;s discuss
        <br className="md:hidden" /> how I can help you achieve your goals.
      </p>
      <a href="mailto:yrzcode@example.com">
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
};
