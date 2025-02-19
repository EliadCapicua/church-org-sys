import { buttonVariants } from "@acme/ui/button";
import Link from "next/link";

interface SignInButtonProps {
	signIn: string;
}

export default function SignInButton({ signIn }: SignInButtonProps) {
	return (
		<Link
			href="/sign-in"
			className={`${buttonVariants({
				variant: "secondary",
			})}`}
		>
			{signIn}
		</Link>
	);
}
