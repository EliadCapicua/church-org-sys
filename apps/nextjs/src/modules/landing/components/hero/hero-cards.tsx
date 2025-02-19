import type { Missionary } from "@/modules/common/types/users";
import { Avatar, AvatarFallback, AvatarImage } from "@acme/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@acme/ui/card";
import MissionaryCard from "./missionary-card";
import PlacesCard from "./places-card";

interface HeroCardsProps {
	places: string[];
	missionary: Missionary;
}

export default function HeroCards({ places, missionary }: HeroCardsProps) {
	return (
		<div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
			{/* Testimonial */}
			<Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="flex flex-row items-center gap-4 pb-2">
					<Avatar>
						<AvatarImage alt="" src="https://github.com/shadcn.png" />
						<AvatarFallback>SH</AvatarFallback>
					</Avatar>

					<div className="flex flex-col">
						<CardTitle className="text-lg">John Doe React</CardTitle>
						<CardDescription>@john_doe</CardDescription>
					</div>
				</CardHeader>

				<CardContent>This landing page is awesome!</CardContent>
			</Card>

			{/* Team */}
			<MissionaryCard missionary={missionary} />

			{/* Pricing */}
			<PlacesCard places={places} />

			{/* Service */}
			<Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
					<div className="mt-1 bg-primary/20 p-1 rounded-2xl">
						{/* <LightBulbIcon /> */}
					</div>
					<div>
						<CardTitle>Light & dark mode</CardTitle>
						<CardDescription className="text-md mt-2">
							Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
							natusm.
						</CardDescription>
					</div>
				</CardHeader>
			</Card>
		</div>
	);
}
