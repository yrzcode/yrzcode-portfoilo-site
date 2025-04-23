import { cn } from "@/lib/utils";
import { GridGlobe } from "../../../ui/Globe/GridGlobe";
import { Skills } from "./SkillsCell";
import { ContactCell } from "./ContectCell";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
				className,
			)}
		>
			{children}
		</div>
	);
};

export type BentoGridItemProps = {
	id: number;
	itemId?: string;
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
};

export const BentoGridItem = (props: BentoGridItemProps) => {
	const {
		id,
		className,
		title,
		titleClassName,
		description,
		img,
		spareImg,
		imgClassName,
	} = props;

	return (
		<div
			className={cn(
				"group/bento",
				"bento-grid-item",
				id === 6 && "flex-center",
				className,
			)}
		>
			{/* IMG */}
			<div className="bento-grid-item__img">
				{img && <img src={img} alt={img} className={imgClassName} />}
			</div>

			{/* SPARE_IMG */}
			<div className="bento-grid-item__imgSpare">
				{img && <img src={spareImg} alt={spareImg} />}
			</div>

			{/* CONTENTS */}
			<div className={cn(titleClassName, "bento-grid-item-contents")}>
				{/* DESCRIPTION */}
				<div className="bento-grid-item-contents__description">
					{description}
				</div>

				{/* TITLE */}
				<div className="bento-grid-item-contents__title">{title}</div>

				{/* GLOBE EFFECT */}
				{id === 2 && <GridGlobe />}

				{/* WORDS */}
				{id === 3 && <Skills />}

				{/* ANIMATION */}
				{id === 6 && <ContactCell />}
			</div>
		</div>
	);
};
