import { auth } from "@acme/auth";
import { redirect } from "next/navigation";
import type { LayoutProps } from "~/lib/utils/with-user-role";

export default async function Layout(props: LayoutProps) {
	const session = await auth();

	if (!session) {
		redirect("/auth/sign-in");
	}

	return props.children;
}
