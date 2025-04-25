import { FaLocationArrow } from "react-icons/fa";
import { MagicButton } from "../../ui/MagicButton";
export const Contents = () => {
	return (
		<div className="footer-contents-container">
			<h1 className="heading title">
				<span className="text-blue-100">Ready</span>
				&nbsp;to&nbsp;
				<span className="text-yellow-300">contribute</span>
				&nbsp;to your team and drive&nbsp;
				<span className="text-violet-600">impactful digital </span>
				<span className="text-yellow-300">solutions</span>
			</h1>
			<p className="desc">
				Let’s connect to explore how my skills and experience
				<br className="md:hidden" /> can support your goals.
			</p>
			<a href="mailto:yangrenzhengwork@gmail.com">
				<MagicButton
					title="Let's get in touch"
					icon={<FaLocationArrow />}
					position="right"
				/>
			</a>
		</div>
	);
};
