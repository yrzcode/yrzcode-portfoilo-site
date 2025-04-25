"use client";

import { cn } from "@/lib/utils";
import { GridGlobe } from "../../../ui/Globe/GridGlobe";
import { Skills } from "./SkillsCell";
import { ContactCell } from "./ContectCell";
import { Button } from "@/components/ui";
import { useRef, useEffect } from "react";
import {
	motion,
	useAnimationFrame,
	useMotionTemplate,
	useMotionValue,
	useTransform,
} from "framer-motion";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div className={cn("bento-grid-container", className)}>{children}</div>
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
		itemId,
		className,
		title,
		titleClassName,
		description,
		img,
		spareImg,
		imgClassName,
	} = props;

	if (id === 1) {
		return (
			<FirstCellEffect
				{...props}
				className={`${className} border-white border-[0.1rem] sm:border-[0.1rem]`}
			/>
		);
	}

	return (
		<div
			id={itemId}
			className={cn(
				"group/bento",
				"bento-grid-item",
				id === 6 &&
					"flex-center border-yellow-300 border-[0.1rem] sm:border-[0.1rem]",
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
				<div
					className={`bento-grid-item-contents__title ${id === 5 ? "text-yellow-500" : ""}`}
				>
					{title}
				</div>

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

const FirstCellEffect = ({
	itemId,
	className,
	img,
	imgClassName,
}: BentoGridItemProps) => {
	return (
		<div
			id={itemId}
			className={cn(
				"group/bento",
				"bento-grid-item",
				"min-h-[10rem]",
				className,
			)}
		>
			{/* 动态描边效果 */}
			<AnimatedBorder />

			{/* 内容 */}
			<div className="bento-grid-item__img absolute inset-1 !m-auto !w-[calc(100%-0.25rem)] !h-[calc(100%-0.25rem)]">
				{img && <img src={img} alt={img} className={imgClassName} />}
			</div>
		</div>
	);
};

// 动态描边效果组件
const AnimatedBorder = () => {
	const pathRef = useRef<SVGRectElement>(null);
	const progress = useMotionValue(0);

	useAnimationFrame((time) => {
		const length = pathRef.current?.getTotalLength();
		if (length) {
			const pxPerMillisecond = length / 8000; // 8秒完成一次动画，速度更慢
			progress.set((time * pxPerMillisecond) % length);
		}
	});

	const x = useTransform(
		progress,
		(val) => pathRef.current?.getPointAtLength(val)?.x,
	);
	const y = useTransform(
		progress,
		(val) => pathRef.current?.getPointAtLength(val)?.y,
	);

	// 反向旋转的第二个点
	const x2 = useTransform(progress, (val) => {
		const length = pathRef.current?.getTotalLength() || 1;
		const reversePosition = (length - val) % length;
		return pathRef.current?.getPointAtLength(reversePosition)?.x;
	});

	const y2 = useTransform(progress, (val) => {
		const length = pathRef.current?.getTotalLength() || 1;
		const reversePosition = (length - val) % length;
		return pathRef.current?.getPointAtLength(reversePosition)?.y;
	});

	const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
	const transform2 = useMotionTemplate`translateX(${x2}px) translateY(${y2}px) translateX(-50%) translateY(-50%)`;

	return (
		<div className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				className="absolute h-full w-full"
				width="100%"
				height="100%"
			>
				<title>动态白色描边效果</title>
				<rect
					ref={pathRef}
					width="100%"
					height="100%"
					fill="none"
					rx="1.75rem"
					ry="1.75rem"
					strokeWidth="1.5"
					stroke="rgba(255, 255, 255, 0.2)"
					strokeDasharray="4 4"
				/>
			</svg>

			{/* 第一个光点 - 顺时针 */}
			<motion.div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "inline-block",
					transform,
				}}
			>
				<div className="h-16 w-16 opacity-60 bg-[radial-gradient(#ffffff_15%,transparent_75%)]" />
			</motion.div>

			{/* 第二个光点 - 逆时针 */}
			<motion.div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "inline-block",
					transform: transform2,
				}}
			>
				<div className="h-12 w-12 opacity-50 bg-[radial-gradient(#38bdf8_15%,transparent_75%)]" />
			</motion.div>

			{/* 背景光晕效果 */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 opacity-30">
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
						<div className="absolute top-0 left-[40%] w-1/3 h-1/3 bg-blue-400 rounded-full blur-[60px] animate-pulse transition-all duration-6000" />
						<div className="absolute bottom-0 right-[30%] w-1/4 h-1/4 bg-white rounded-full blur-[40px] animate-pulse transition-all duration-8000" />
					</div>
				</div>
			</div>
		</div>
	);
};
