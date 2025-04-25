import { SectionHeading } from "@/components/ui";

export const Title = () => {
	return (
		<SectionHeading className="mt-10 md:mt-20 py-8">
			<span className="text-yellow-200">Skills &</span>
			<br className="lg:hidden" />
			<span className="text-purple"> Technologies</span>
		</SectionHeading>
	);
};
