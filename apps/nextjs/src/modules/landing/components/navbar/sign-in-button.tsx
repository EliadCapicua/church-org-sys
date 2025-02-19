import { buttonVariants } from "@acme/ui/button";
import Link from "next/link";

export default function SignInButton() {
	return (
		<Link
			href="/sign-in"
			className={`${buttonVariants({
				variant: "secondary",
			})}`}
		>
			Sign In
		</Link>
	);
}
