import { TextGenerateEffect, MagicButton } from "@/components/ui";
import { FaLocationArrow } from "react-icons/fa";

export const Words = () => {
	return (
		<div className="words">
			<div className="max-w-[89vw] md:max-w-2xl flex flex-col items-center">
				<h2 className="uppercase tracking-widest text-center text-blue-100 max-w-96">
					Explore&nbsp;
					<span className="font-bold text-indigo-600">My Web Dev Craft </span>
					World
				</h2>

				{/* TEXT EFFECT */}
				<TextGenerateEffect
					className="text-center text-[40px] md:text-5xl lg:text-6xl"
					words="Web Development Works By Rz.Yang"
				/>

				{/* SUB WORDS */}
				<p className="sub-words">
					Hi, I'm Rz-Yang. A&nbsp;
					<span className="text-yellow-400">Software Engineer</span>&nbsp;
					specializing in&nbsp;
					<span className="text-violet-400">modern web technologies</span> and
					creating <span className="text-green-400">intuitive user</span>
					&nbsp;experiences.
				</p>

				{/* BUTTON */}
				<a href="#projects">
					<MagicButton
						title="Show My Projects"
						position="right"
						icon={<FaLocationArrow />}
					/>
				</a>
			</div>
		</div>
	);
};
