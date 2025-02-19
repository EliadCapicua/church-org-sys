import { buttonVariants } from "@acme/ui/button";
import type { RouteProps } from "common/types/route";
import Link from "next/link";

interface Props {
	routeList: RouteProps[];
}

export default function NavbarRoutes({ routeList }: Props) {
	return (
		<>
			{routeList.map((route: RouteProps, i) => (
				<Link
					rel="noreferrer noopener"
					href={route.href}
					key={i}
					className={`${buttonVariants({
						variant: "ghost",
					})}`}
				>
					{route.label}
				</Link>
			))}
		</>
	);
}
