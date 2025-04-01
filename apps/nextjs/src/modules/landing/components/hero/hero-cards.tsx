import LogoIcon from "@/modules/common/components/logo-icon";
import type { CountryMissionary } from "@/modules/common/types/users";
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
			<Card className="absolute w-[340px] -top-[25px] h-60 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
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
					<p>Sede Central: México</p>
				</CardContent>
				<CardFooter className="flex justify-center items-center mb-0 pb-0">
					<a
						rel="noreferrer noopener"
						href="https://iafcj.org/"
						target="_blank"
					>
						<span className="sr-only">iafcj icon</span>
						<LogoIcon width={80} height={80} />
					</a>
				</CardFooter>
			</Card>

			{/* Team */}
			<MissionaryCard missionary={missionary} />

			{/* Pricing */}
			<PlacesCard places={places} />

			{/* Service */}
			<Card className="absolute w-[300px] right-[20px] -bottom-[40px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
					<div>
						<CardTitle>Hasta lo último de la Tierra</CardTitle>
						<CardDescription className="text-sm mt-2">
							<p className="text-justify">
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
