import Link from "next/link";
import { socialMedia } from "@/data";

export const Copyright = () => {
	return (
		<div className="copyright-container">
			<p className="copyright">
				Copyright © {new Date().getFullYear()} Renzheng Yang.
			</p>
			<div className="social-media">
				{socialMedia.map(({ id, img, href }) => {
					return (
						<Link href={href} key={id}>
							<img
								src={img}
								alt={img}
								className="image"
								height={20}
								width={20}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
