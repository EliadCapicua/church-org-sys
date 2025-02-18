import { auth } from "@acme/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
	const session = await auth();

	if (!session) {
		redirect("/auth/sign-in");
	}

	redirect("/organization");
}
