import React from "react";
import { BentoGrid, BentoGridItem, BentoGridItemProps } from "./BentoGrid";
import { gridItems } from "@/data";

export const Grid = () => {
	return (
		<section id="#about">
			<BentoGrid>
				{gridItems.map((item, i) => {
					const { id } = item;
					return <BentoGridItem key={id} {...item} />;
				})}
			</BentoGrid>
		</section>
	);
};
