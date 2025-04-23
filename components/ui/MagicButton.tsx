"use client";

import { useState } from "react";

type MagicButtonProps = {
	title?: string;
	icon?: React.ReactNode;
	position?: "left" | "right";
	handleClick?: () => void;
	otherClasses?: string;
};

export const MagicButton = (props: MagicButtonProps) => {
	const { title, icon, position, handleClick, otherClasses = "" } = props;

	return (
		<button className="magic-button" onClick={handleClick}>
			<span className="magic-button__border" />
			<span className={`magic-button__text ${otherClasses}`}>
				{position === "left" && icon}
				{title || "Click Me"}
				{position === "right" && icon}
			</span>
		</button>
	);
};
