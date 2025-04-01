import type {
	FeatureProps,
	SponsorProps,
	statsProps,
} from "@/modules/common/types/landing";
import type { CountryMissionary } from "@/modules/common/types/users";
import type { RouteProps } from "common/types/route";
import { GiftIcon, MapIcon, MedalIcon, PlaneIcon, Radar } from "lucide-react";
import { useTranslations } from "next-intl";

export const useLandingPage = () => {
	const t = useTranslations("LandingPage");

	const routes: RouteProps[] = [
		{
			href: "/locations",
			label: t("headquarters"),
		},
		{
			href: "#team",
			label: t("ministries"),
		},
		{
			href: "#testimonials",
			label: t("testimonies"),
		},
		{
			href: "#faq",
			label: t("faq"),
		},
	];

	const sponsors: SponsorProps[] = [
		{
			icon: <Radar size={34} />,
			name: "Bogotá D.C.",
		},
		{
			icon: <Radar size={34} />,
			name: "Cali",
		},
		{
			icon: <Radar size={34} />,
			name: "Garagoa",
		},
		{
			icon: <Radar size={34} />,
			name: "Santa Marta",
		},
		{
			icon: <Radar size={34} />,
			name: "Barranquilla",
		},
		{
			icon: <Radar size={34} />,
			name: "Medellín",
		},
	];

	const stats: statsProps[] = [
		{
			quantity: "2.7K+",
			description: "Creyentes",
		},
		{
			quantity: "1.8K+",
			description: "Miembros Bautilizados",
		},
		{
			quantity: "112",
			description: "Celulas",
		},
		{
			quantity: "4",
			description: "Iglesias",
		},
	];

	const places = ["Bogotá (Sede Central)", "Cali", "Garagoa", "Santa Marta"];

	const featuresWorks: FeatureProps[] = [
		{
			icon: <MedalIcon />,
			title: "Accesibilidad",
			description:
				"Ir a lo largo del país, llevando el mensaje de salvación a cada rincón.",
		},
		{
			icon: <MapIcon />,
			title: "Comunidad",
			description:
				"Construir una comunidad unida y fuerte, donde todos se sientan bienvenidos.",
		},
		{
			icon: <PlaneIcon />,
			title: "Crecimiento",
			description:
				"Fomentar el crecimiento espiritual y personal de cada miembro de la iglesia.",
		},
		{
			icon: <GiftIcon />,
			title: "Discipulado",
			description:
				"Brindar un programa de discipulado efectivo y accesible para todos.",
		},
	];

	const missionary: CountryMissionary = {
		id: "1",
		name: "Colombia",
		mission: "Pasión por las almas",
		image: "assets/flag-colombia.avif",
		message:
			"La misión de la iglesia es predicar el evangelio a toda criatura, y en Colombia estamos comprometidos con esta tarea.",
	};

	const featureList: string[] = [
		"Iglesia",
		"Pastores",
		"Misioneros",
		"Eventos",
		"Testimonios",
		"Convivios",
		"Encuentros",
		"Retiros",
		"Conferencias",
		"Campañas",
	];

	const features: FeatureProps[] = [
		{
			title: "Misioneros en Colombia",
			description:
				"El Misionero Arnet Barreras Castillo y la hna. Miriam Chc, son los misioneros en Colombia. Ellos están trabajando en la ciudad de Bogotá y continuando con la obra en el país. Hasta lo último de la tierra. Cueste lo que cueste.",
			image: "/assets/ma.jpg",
		},
		{
			title: "Pastores y Misioneros del Cono Norte",
			description:
				"Convención nacional de Colombia, donde se reúnen pastores y misioneros del cono norte.",
			image: "/assets/cgc.jpg",
		},
		{
			title: "Convención General 2024",
			description:
				"Damos gracias a Dios por la oportunidad de servirle y de ser parte de esta gran familia.",
			image: "/assets/cg.jpg",
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
