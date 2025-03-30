import Image from "next/image";
import { Statistics } from "./stadistics";

export default function About() {
	return (
		<section id="about" className="container py-24 sm:py-32">
			<div className="bg-muted/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<Image
						src={"/assets/pilot.png"}
						alt=""
						width={300}
						height={300}
						className="object-contain rounded-lg"
					/>
					<div className="bg-green-0 flex flex-col justify-between">
						<div className="pb-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
									Nuestra{" "}
								</span>
								Iglesia
							</h2>
							<p className="text-lg text-muted-foreground mt-4">
								Hay un solo Dios. Creemos que hay un solo Dios único e
								indivisible en su esencia y se ha manifestado al mundo en
								distintas formas a través de las edades y que especialmente se
								ha revelado como Padre en la creación del universo, como Hijo en
								la redención de la humanidad y como Espíritu Santo derramándose
								en los corazones de los creyentes (Génesis 1:1, Juan 1:1-3,14, 2
								Corintios 3:17).
							</p>
							<p className="text-lg text-muted-foreground mt-4">
								Organizacionalmente, la iglesia en Colombia esta compuesta por:
							</p>
						</div>
						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
}
