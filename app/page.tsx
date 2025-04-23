import { FloatingNav } from "@/components/ui";
import { navItems } from "@/data";
import {
	Grid,
	Hero,
	Projects,
	Testimonials,
	Experience,
	Approach,
	Footer,
} from "@/components/Sections";

export default function HomePage() {
	return (
		<main className="text-sky-400/100 bg-black-100 relative flex-center flex-col sm:px-10 px-5 overflow-clip">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				{/* <Projects /> */}
				<Testimonials />
				<Experience />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}
