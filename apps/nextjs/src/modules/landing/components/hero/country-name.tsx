interface CountryNameProps {
	church: string;
	apostolic: string;
	faith: string;
	inText: string;
	christ: string;
	jesus: string;
}

export default function CountryName({
	church,
	apostolic,
	faith,
	inText,
	christ,
	jesus,
}: CountryNameProps) {
	return (
		<main className="text-5xl md:text-6xl font-bold">
			<h1 className="bg-[linear-gradient(120deg,#FFD700_0%,#FFD700_33%,#0033A0_33%,#0033A0_66%,#CE1126_66%,#CE1126_100%)] bg-clip-text text-transparent inline-block">
				<span>{church} </span>
			</h1>{" "}
			{apostolic}
			<br />
			<span>
				{faith} {inText}
			</span>
			<br />
			<span>
				{christ} {jesus}
			</span>
		</main>
	);
}
