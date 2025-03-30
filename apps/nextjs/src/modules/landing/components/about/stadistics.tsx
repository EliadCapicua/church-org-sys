import type { statsProps } from "@/modules/common/types/landing";
import { useLandingPage } from "../../hooks/useLandingPage";

export const Statistics = () => {
	const page = useLandingPage();

	return (
		<section id="statistics">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
				{page.stats.map(({ quantity, description }: statsProps) => (
					<div key={description} className="space-y-2 text-center">
						<h2 className="text-xl sm:text-4xl font-bold ">{quantity}</h2>
						<p className="text-base text-muted-foreground">{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
