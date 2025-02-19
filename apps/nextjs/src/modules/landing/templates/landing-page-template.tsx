import { ClientOnly } from "~/modules/common/components/client-only";
import HeroLanding from "../components/hero/hero-landing";
import NavbarLanding from "../components/navbar/navbar-landing";

export default function LandingPageTemplate() {
	return (
		<ClientOnly>
			<NavbarLanding />
			<HeroLanding />
		</ClientOnly>
	);
}
