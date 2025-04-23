export const SectionHeading = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={`py-20 ${className}`}>
			<h1 className="heading text-white-200">{children}</h1>
		</div>
	);
};
