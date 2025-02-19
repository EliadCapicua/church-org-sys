import type { RouteProps } from "~/modules/common/types/route";

export const useLandingPage = () => {
	const routes: RouteProps[] = [
		{
			href: "#features",
			label: "Features",
		},
		{
			href: "#testimonials",
			label: "Testimonials",
		},
		{
			href: "#pricing",
			label: "Pricing",
		},
		{
			href: "#faq",
			label: "FAQ",
		},
	];

	return {
		routes,
	};
};
