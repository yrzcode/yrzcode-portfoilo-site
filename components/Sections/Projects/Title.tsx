import { SectionHeading } from "@/components/ui";

export function Title() {
	return (
		<SectionHeading>
			{/* A small selection of <br /> */}
			<span className="text-purple">Recent Project&nbsp;&&nbsp;</span>
			<br />
			<span className="text-yellow-200">Highlights</span>
		</SectionHeading>
	);
}
