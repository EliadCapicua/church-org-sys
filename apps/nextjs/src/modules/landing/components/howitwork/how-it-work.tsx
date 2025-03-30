import type { FeatureProps } from "@/modules/common/types/landing";
import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";
import { useLandingPage } from "../../hooks/useLandingPage";

export default function HowItWork() {
	const page = useLandingPage();

	return (
		<section id="howItWorks" className="container text-center py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold ">
				Paso a paso del{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					trabajo{" "}
				</span>
				que hacemos en la obra de Colombia
			</h2>
			<p className="md:w-3/4 mx-auto mt-4 mb-8 text-lg text-muted-foreground">
				Conoce cómo funciona la obra de Colombia y cómo puedes ser parte de
				ella. Aquí te contamos todo lo que necesitas saber para unirte a nuestra
				comunidad y contribuir a la construcción de un futuro mejor.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{page.featuresWorks.map(
					({ icon, title, description }: FeatureProps) => (
						<Card key={title} className="bg-muted/50">
							<CardHeader>
								<CardTitle className="grid gap-4 place-items-center">
									{icon}
									{title}
								</CardTitle>
							</CardHeader>
							<CardContent>{description}</CardContent>
						</Card>
					),
				)}
			</div>
		</section>
	);
}
