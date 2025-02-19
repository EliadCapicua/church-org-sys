import HeroCards from "./hero-cards";
import "./index.css";
import { useLandingPage } from "../../hooks/useLandingPage";
import CountryName from "./country-name";

export default function HeroLanding() {
	const page = useLandingPage();
	return (
		<section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
			<div className="text-center lg:text-start space-y-6">
				<CountryName {...page} />
				<p className="text-base md:w-10/12 mx-auto lg:mx-0">
					{page.description}
				</p>
			</div>

			{/* Hero cards sections */}
			<div className="z-50">
				<HeroCards places={page.places} missionary={page.missionary} />
			</div>

			{/* Shadow effect */}
			<div className="shadow-hero" />
		</section>
	);
}
