import type { LayoutProps } from "@/lib/utils/with-user-role";
import { auth } from "@acme/auth";
import { redirect } from "next/navigation";

export default async function Layout(props: LayoutProps) {
	const session = await auth();

	if (!session) {
		redirect("/auth/sign-in");
	}

	return props.children;
}
