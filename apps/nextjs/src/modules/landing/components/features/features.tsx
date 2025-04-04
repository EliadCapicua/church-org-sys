import type { FeatureProps } from "@/modules/common/types/landing";
import { Badge } from "@acme/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@acme/ui/card";
import Image from "next/image";
import { useLandingPage } from "../../hooks/useLandingPage";

export default function Features() {
	const page = useLandingPage();

	return (
		<section id="features" className="container py-24 sm:py-32 space-y-8">
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center">
				Grandes{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Eventos
				</span>
			</h2>

			<div className="flex flex-wrap md:justify-center gap-4">
				{page.featureList.map((feature: string) => (
					<div key={feature}>
						<Badge variant="secondary" className="text-sm">
							{feature}
						</Badge>
					</div>
				))}
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{page.features.map(({ title, description, image }: FeatureProps) => (
					<Card key={title}>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>
						<CardContent className="text-sm h-32">{description}</CardContent>
						<CardFooter className="flex justify-center items-center">
							{image && (
								<Image
									src={image}
									alt="About feature"
									width={400}
									height={400}
									className="w-[300px] h-[250px] lg:w-[300px] object-cover rounded-lg"
									loading="lazy"
								/>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}
