import { auth } from "@acme/auth";
import { redirect } from "next/navigation";
import LandingPageTemplate from "~/modules/landing/templates/landing-page-template";

export default async function HomePage() {
	const session = await auth();

	if (session) {
		redirect("/organization");
	}

	return <LandingPageTemplate />;
}
