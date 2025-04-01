"use client";

import { Badge } from "@acme/ui/badge";
import { Button } from "@acme/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@acme/ui/card";
import { Check } from "lucide-react";

interface PlacesCardProps {
	places: string[];
}

export default function PlacesCard({ places }: PlacesCardProps) {
	const handleExplore = () => {
		// Do something
	};

	return (
		<Card className="absolute top-[250px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
			<CardHeader>
				<CardTitle className="flex item-center justify-between">
					Sedes
					<Badge variant="secondary" className="text-sm text-primary">
						Iglesias
					</Badge>
				</CardTitle>
				<CardDescription>
					<p className="text-justify">
						Encuentra la sede más cercana y únete a nuestra familia espiritual.
						¡Te esperamos con los brazos abiertos! ❤️
					</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button className="w-full" onClick={handleExplore}>
					Explorar
				</Button>
			</CardContent>
			<hr className="w-4/5 m-auto mb-4" />
			<CardFooter className="flex">
				<div className="space-y-1">
					{places.map((place: string) => (
						<span key={place} className="flex">
							<Check className="text-green-500" size={20} />{" "}
							<span className="ml-2 text-sm">{place}</span>
						</span>
					))}
				</div>
			</CardFooter>
		</Card>
	);
}
