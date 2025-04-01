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

interface MissionaryCardProps {
	missionary: CountryMissionary;
}

export default function MissionaryCard({ missionary }: MissionaryCardProps) {
	return (
		<Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
			<CardHeader className="mt-8 flex justify-center items-center pb-2">
				<img
					src={missionary.image}
					alt="user avatar"
					className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
				/>
				<CardTitle className="text-center">{missionary.name}</CardTitle>
				<CardDescription className="font-normal text-primary">
					{missionary.mission}
				</CardDescription>
			</CardHeader>
			<CardContent className="text-center pb-2 text-sm">
				<p className="text-justify">{missionary.message}</p>
			</CardContent>
			<CardFooter className="flex justify-center items-center gap-2">
				<LogoIcon width={80} height={80} />
			</CardFooter>
		</Card>
	);
}
