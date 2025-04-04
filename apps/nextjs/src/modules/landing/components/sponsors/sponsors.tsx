import type { SponsorProps } from "@/modules/common/types/landing";
import { useLandingPage } from "../../hooks/useLandingPage";

export default function Sponsors() {
	const page = useLandingPage();

	return (
		<section id="sponsors" className="container pt-24 sm:py-32">
			<h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
				Lugares alcanzados por el evangelio
			</h2>
			<div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
				{page.sponsors.map(({ icon, name }: SponsorProps) => (
					<div
						key={name}
						className="flex items-center gap-1 text-muted-foreground/60"
					>
						<span>{icon}</span>
						<h3 className="text-xl  font-bold">{name}</h3>
					</div>
				))}
			</div>
		</section>
	);
}
