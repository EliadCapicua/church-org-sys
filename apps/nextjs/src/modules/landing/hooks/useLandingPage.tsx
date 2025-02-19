import type { Missionary } from "@/modules/common/types/users";
import type { RouteProps } from "common/types/route";
import { useTranslations } from "next-intl";

export const useLandingPage = () => {
	const t = useTranslations("LandingPage");

	const routes: RouteProps[] = [
		{
			href: "#headquarters",
			label: t("headquarters"),
		},
		{
			href: "#events",
			label: t("events"),
		},
		{
			href: "#ministries",
			label: t("ministries"),
		},
		{
			href: "#faq",
			label: t("faq"),
		},
	];

	const places = ["Bogotá", "Cali", "Garagoa", "Santa Marta"];

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
	};
};
