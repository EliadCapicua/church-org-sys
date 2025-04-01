import { ClientOnly } from "@/modules/common/components/client-only";
import type { RouteProps } from "@/modules/common/types/route";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@acme/ui/navigation-menu";
import LogoIcon from "common/components/logo-icon";
import Link from "next/link";
import NavbarRoutes from "./navbar-routes";
import NavbarSheet from "./navbar-sheet";
import { ThemeToggle } from "@acme/ui/theme";

export default function NavbarLanding() {
	const routes: RouteProps[] = [
		{
			href: "/locations",
			label: "Sedes",
		},
		{
			href: "/home#team",
			label: "Ministros",
		},
		{
			href: "/home#testimonials",
			label: "Testimonios",
		},
		{
			href: "/home#faq",
			label: "FAQ",
		},
	];

	return (
		<ClientOnly>
			<header
				id="nav"
				className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background"
			>
				<NavigationMenu className="mx-auto">
					<NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
						<NavigationMenuItem className="flex font-bold">
							<Link
								rel="noreferrer noopener"
								href="/"
								className="ml-2 font-bold text-xl flex items-center text-center gap-2"
							>
								<LogoIcon />
								<h1 className="bg-[linear-gradient(120deg,#FFD700_0%,#FFD700_33%,#0033A0_33%,#0033A0_66%,#CE1126_66%,#CE1126_100%)] bg-clip-text text-transparent inline-block">
									IAFCJ Colombia
								</h1>{" "}
							</Link>
						</NavigationMenuItem>

						{/* mobile */}
						<div className="flex md:hidden">
							<NavbarSheet routeList={routes} />
						</div>

						{/* desktop */}
						<nav className="hidden md:flex gap-2">
							<NavbarRoutes routeList={routes} />
						</nav>

						<div className="hidden md:flex gap-2">
							{/* <SignInButton signIn={signIn} /> */}
							<ThemeToggle />
						</div>
					</NavigationMenuList>
				</NavigationMenu>
			</header>
		</ClientOnly>
	);
}
