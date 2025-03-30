import { socialIcon } from "@/lib/utils/icons";
import { buttonVariants } from "@acme/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@acme/ui/card";

interface TeamProps {
	imageUrl: string;
	name: string;
	position: string;
	socialNetworks: SocialNetworksProps[];
	mission: string;
}

interface SocialNetworksProps {
	name: string;
	url: string;
}

const teamList: TeamProps[] = [
	{
		imageUrl: "https://i.pravatar.cc/150?img=35",
		name: "Arnet Barreras Castillo",
		position: "Misionero Supervisor Cono Norte",
		socialNetworks: [
			{
				name: "Facebook",
				url: "https://www.facebook.com/arnet.barrerascastillo",
			},
			{
				name: "Instagram",
				url: "https://www.instagram.com/barrerascastillo/",
			},
		],
		mission: "Cueste lo que cueste hasta lo último de la tierra",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=60",
		name: "Cristobal Rodriguez Colmenares",
		position: "Ministro",
		socialNetworks: [
			{
				name: "Facebook",
				url: "https://www.facebook.com/cristobal.rodriguezcolmenares",
			},
			{
				name: "Instagram",
				url: "https://www.instagram.com/colmenarescristobal/",
			},
		],
		mission: "Animate y esfuerzate y manos a la obra",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=36",
		name: "Jorge Martinez Lancheros",
		position: "Ministro",
		socialNetworks: [
			{
				name: "Facebook",
				url: "https://www.facebook.com/jorge.martinezlancheros",
			},
			{
				name: "Instagram",
				url: "https://www.instagram.com/jorslancheros/",
			},
		],
		mission: "El que no vive para servir no sirve para vivir",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=17",
		name: "Eberth Beleño",
		position: "Ministro",
		socialNetworks: [
			{
				name: "Facebook",
				url: "https://www.facebook.com/eberth.beleno.1",
			},
			{
				name: "Instagram",
				url: "https://www.instagram.com/belenoeberth/",
			},
		],
		mission: "El que no vive para servir no sirve para vivir",
	},
];

export default function Team() {
	return (
		<section id="team" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Nuestro Dedicado{" "}
				</span>
				Equipo
			</h2>

			<p className="mt-4 mb-10 text-lg text-muted-foreground">
				Un equipo comprometido con la misión de llevar esperanza y fe a cada
				rincón. Con un enfoque en la comunidad y el servicio, trabajamos
				incansablemente para crear un impacto positivo en la vida de aquellos a
				quienes servimos.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
				{teamList.map(
					({
						imageUrl,
						name,
						position,
						socialNetworks,
						mission,
					}: TeamProps) => (
						<Card
							key={name}
							className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
						>
							<CardHeader className="mt-8 flex justify-center items-center pb-2">
								<img
									src={imageUrl}
									alt={`${name} ${position}`}
									className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
								/>
								<CardTitle className="text-center">{name}</CardTitle>
								<CardDescription className="text-primary">
									{position}
								</CardDescription>
							</CardHeader>

							<CardContent className="text-center pb-2 italic">
								<p>&quot;{mission}&quot;</p>
							</CardContent>

							<CardFooter>
								{socialNetworks.map(({ name, url }: SocialNetworksProps) => (
									<div key={name}>
										<a
											rel="noreferrer noopener"
											href={url}
											target="_blank"
											className={buttonVariants({
												variant: "ghost",
												size: "sm",
											})}
										>
											<span className="sr-only">{name} icon</span>
											{socialIcon(name)}
										</a>
									</div>
								))}
							</CardFooter>
						</Card>
					),
				)}
			</div>
		</section>
	);
}
