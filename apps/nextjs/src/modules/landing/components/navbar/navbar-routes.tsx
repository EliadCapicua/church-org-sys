import { buttonVariants } from "@acme/ui/button";
import Link from "next/link";
import type { RouteProps } from "~/modules/common/types/route";

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
