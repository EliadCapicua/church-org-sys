import { auth } from "@acme/auth";
import LandingPageTemplate from "modules/landing/templates/landing-page-template";
import { redirect } from "next/navigation";

export default async function HomePage() {
	const session = await auth();

	if (session) {
		redirect("/organization");
	}

	return <LandingPageTemplate />;
}
