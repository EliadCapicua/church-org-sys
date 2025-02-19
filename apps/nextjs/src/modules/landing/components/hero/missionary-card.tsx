import type { Missionary } from "@/modules/common/types/users";
import { buttonVariants } from "@acme/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@acme/ui/card";

interface MissionaryCardProps {
	missionary: Missionary;
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
					{missionary.role}
				</CardDescription>
			</CardHeader>

			<CardContent className="text-center pb-2">
				<p>{missionary.message}</p>
			</CardContent>

			<CardFooter>
				<div>
					<a
						rel="noreferrer noopener"
						href="https://github.com/leoMirandaa"
						target="_blank"
						className={buttonVariants({
							variant: "ghost",
							size: "sm",
						})}
					>
						<span className="sr-only">Github icon</span>
						{/* <GitHubLogoIcon className="w-5 h-5" /> */}
					</a>
					<a
						rel="noreferrer noopener"
						href="https://www.linkedin.com/in/leopoldo-miranda/"
						target="_blank"
						className={buttonVariants({
							variant: "ghost",
							size: "sm",
						})}
					>
						<span className="sr-only">Linkedin icon</span>
						{/* <Linkedin size="20" /> */}
					</a>
				</div>
			</CardFooter>
		</Card>
	);
}
