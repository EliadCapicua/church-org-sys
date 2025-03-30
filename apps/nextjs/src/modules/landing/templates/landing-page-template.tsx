"use client";

import { ClientOnly } from "modules/common/components/client-only";
import About from "../components/about/about";
import Cta from "../components/cta/cta";
import FAQ from "../components/faq/faq";
import Features from "../components/features/features";
import Footer from "../components/footer/footer";
import HeroLanding from "../components/hero/hero-landing";
import HowItWork from "../components/howitwork/how-it-work";
import Newsletter from "../components/newsletter/news-letter";
// import Pricing from "../components/pricing/pricing";
import ScrollToTop from "../components/scroll/scroll-top";
import Services from "../components/services/services";
import Sponsors from "../components/sponsors/sponsors";
import Team from "../components/team/team";
import Testimonials from "../components/testimonials/testimonials";

export default function LandingPageTemplate() {
	return (
		<ClientOnly>
			<div className="flex flex-col flex-grow h-[calc(100vh-64px)]">
				<HeroLanding />
				<Sponsors />
				<About />
				<HowItWork />
				<Features />
				<Services />
				<Cta />
				<Testimonials />
				<Team />
				{/* <Pricing /> */}
				<Newsletter />
				<FAQ />
				<Footer />
				<ScrollToTop />
			</div>
		</ClientOnly>
	);
}
