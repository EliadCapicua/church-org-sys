import { socialIcon } from "@/lib/utils/icons";
import type { CountryMissionary } from "@/modules/common/types/users";
import { buttonVariants } from "@acme/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@acme/ui/card";
import MissionaryCard from "./missionary-card";
import PlacesCard from "./places-card";

interface HeroCardsProps {
	places: string[];
	missionary: CountryMissionary;
}

export default function HeroCards({ places, missionary }: HeroCardsProps) {
	return (
		<div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
			{/* Testimonial */}
			<Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="mt-8 flex justify-center items-center pb-2">
					<img
						src="assets/mexican-flag.jpg"
						alt="user avatar"
						className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
					/>
					<div className="flex flex-col">
						<CardTitle className="text-lg">IAFCJ Org</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="text-center pb-2 text-sm">
					<p>Somos parte de la iglesia IAFCJ, una organización cristiana.</p>
				</CardContent>
				<CardFooter className="flex justify-center items-center gap-2">
					<a
						rel="noreferrer noopener"
						href="https://iafcj.org/"
						target="_blank"
						className={buttonVariants({
							variant: "ghost",
							size: "sm",
						})}
					>
						<span className="sr-only">iafcj icon</span>
						{socialIcon("iafcj")}
					</a>
				</CardFooter>
			</Card>

			{/* Team */}
			<MissionaryCard missionary={missionary} />

			{/* Pricing */}
			<PlacesCard places={places} />

			{/* Service */}
			<Card className="absolute w-[350px] -right-[20px] -bottom-[30px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
					<div className="mt-1 bg-primary/20 p-1 rounded-2xl">
						{/* <LightBulbIcon /> */}
					</div>
					<div>
						<CardTitle>Hasta lo último de la Tierra</CardTitle>
						<CardDescription className="text-sm mt-2">
							<p>
								La Gran Comisión es el mandato de Jesús a sus seguidores para ir
								y hacer discípulos de todas las naciones, predicando el
								evangelio y bautizando en el nombre de Jesucristo
							</p>
						</CardDescription>
					</div>
				</CardHeader>
			</Card>
		</div>
	);
}
