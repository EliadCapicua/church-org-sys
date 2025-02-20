import type {
	FeatureProps,
	SponsorProps,
	statsProps,
} from "@/modules/common/types/landing";
import type { Missionary } from "@/modules/common/types/users";
import type { RouteProps } from "common/types/route";
import { GiftIcon, MapIcon, MedalIcon, PlaneIcon, Radar } from "lucide-react";
import { useTranslations } from "next-intl";

export const useLandingPage = () => {
	const t = useTranslations("LandingPage");

	const routes: RouteProps[] = [
		{
			href: "#features",
			label: t("headquarters"),
		},
		{
			href: "#team",
			label: t("events"),
		},
		{
			href: "#testimonials",
			label: t("ministries"),
		},
		{
			href: "#faq",
			label: t("faq"),
		},
	];

	const sponsors: SponsorProps[] = [
		{
			icon: <Radar size={34} />,
			name: "Sponsor 1",
		},
		{
			icon: <Radar size={34} />,
			name: "Sponsor 2",
		},
		{
			icon: <Radar size={34} />,
			name: "Sponsor 3",
		},
		{
			icon: <Radar size={34} />,
			name: "Sponsor 4",
		},
		{
			icon: <Radar size={34} />,
			name: "Sponsor 5",
		},
		{
			icon: <Radar size={34} />,
			name: "Sponsor 6",
		},
	];

	const stats: statsProps[] = [
		{
			quantity: "2.7K+",
			description: "Users",
		},
		{
			quantity: "1.8K+",
			description: "Subscribers",
		},
		{
			quantity: "112",
			description: "Downloads",
		},
		{
			quantity: "4",
			description: "Products",
		},
	];

	const places = ["Bogotá", "Cali", "Garagoa", "Santa Marta"];

	const featuresWorks: FeatureProps[] = [
		{
			icon: <MedalIcon />,
			title: "Accessibility",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
		},
		{
			icon: <MapIcon />,
			title: "Community",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
		},
		{
			icon: <PlaneIcon />,
			title: "Scalability",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
		},
		{
			icon: <GiftIcon />,
			title: "Gamification",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
		},
	];

	const missionary: Missionary = {
		id: "1",
		name: "Arnet Barreras Castillo",
		age: 26,
		mission: "Colombia Bogotá South Mission",
		image: "https://avatars.githubusercontent.com/u/42655934?v=4",
		role: "Missionary supervisor northern cone",
		message:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	};

	const featureList: string[] = [
		"Dark/Light theme",
		"Reviews",
		"Features",
		"Pricing",
		"Contact form",
		"Our team",
		"Responsive design",
		"Newsletter",
		"Minimalist",
	];

	const features: FeatureProps[] = [
		{
			title: "Responsive Design",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
			image: "/assets/growth.png",
		},
		{
			title: "Intuitive user interface",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
			image: "/assets/looking-ahead.png",
		},
		{
			title: "AI-Powered insights",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
			image: "/assets/reflecting.png",
		},
	];

	function onExplore() {
		// TODO: Implement onExplore
	}

	return {
		routes,
		title: t("title"),
		signUp: t("signUp"),
		signIn: t("signIn"),
		church: t("hero.church"),
		apostolic: t("hero.apostolic"),
		faith: t("hero.faith"),
		inText: t("hero.in"),
		christ: t("hero.christ"),
		jesus: t("hero.jesus"),
		description: t("hero.description"),
		places,
		onExplore,
		missionary,
		sponsors,
		stats,
		featuresWorks,
		featureList,
		features,
	};
};
