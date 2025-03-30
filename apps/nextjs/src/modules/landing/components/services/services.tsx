import { Card, CardDescription, CardHeader, CardTitle } from "@acme/ui/card";
import Image from "next/image";
import { ChartIcon, MagnifierIcon, WalletIcon } from "../icons/icons";

interface ServiceProps {
	title: string;
	description: string;
	icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
	{
		title: "Ganar",
		description:
			"Evangelizar de una manera eficaz y con el poder del Espíritu Santo.",
		icon: <ChartIcon />,
	},
	{
		title: "Consolidar",
		description:
			"Ayudar a los nuevos creyentes a crecer en su fe y en su relación con Dios.",
		icon: <WalletIcon />,
	},
	{
		title: "Disipular",
		description:
			"Enseñar a los nuevos creyentes a vivir una vida cristiana y a seguir a Cristo.",
		icon: <MagnifierIcon />,
	},
];

export default function Services() {
	return (
		<section className="container py-24 sm:py-32">
			<div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
				<div>
					<h2 className="text-3xl md:text-4xl font-bold">
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							Visión y Misión{" "}
						</span>
						de la iglesia
					</h2>

					<p className="text-muted-foreground text-base mt-4 mb-8 italic">
						"Y crecía la palabra del Señor, y el número de los discípulos se
						multiplicaba grandemente en Jerusalén; también muchos de los
						sacerdotes obedecían a la fe."
						<br />
						Hechos 6:7
					</p>

					<div className="flex flex-col gap-8">
						{serviceList.map(({ icon, title, description }: ServiceProps) => (
							<Card key={title}>
								<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
									<div className="mt-1 bg-primary/20 p-1 rounded-2xl">
										{icon}
									</div>
									<div>
										<CardTitle>{title}</CardTitle>
										<CardDescription className="text-md mt-2">
											{description}
										</CardDescription>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>

				<Image
					src={"/assets/cube-leg.png"}
					width={500}
					height={500}
					className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
					alt="About services"
				/>
			</div>
		</section>
	);
}
