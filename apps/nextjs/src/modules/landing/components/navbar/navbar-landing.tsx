import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@acme/ui/navigation-menu";
import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
import Link from "next/link";
import LogoIcon from "~/modules/common/components/logo-icon";
import { useLandingPage } from "../../hooks/useLandingPage";
import NavbarRoutes from "./navbar-routes";
import NavbarSheet from "./navbar-sheet";
import SignInButton from "./sign-in-button";

export default function NavbarLanding() {
	const { routes } = useLandingPage();

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
				<NavigationMenu className="mx-auto">
					<NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
						<NavigationMenuItem className="flex font-bold">
							<Link
								rel="noreferrer noopener"
								href="/"
								className="ml-2 font-bold text-xl flex items-center text-center gap-2"
							>
								<LogoIcon />
								Iafcj Colombia
							</Link>
						</NavigationMenuItem>

						{/* mobile */}
						<div className="flex md:hidden">
							<ThemeToggle />
							<NavbarSheet routeList={routes} />
						</div>

						{/* desktop */}
						<nav className="hidden md:flex gap-2">
							<NavbarRoutes routeList={routes} />
						</nav>

						<div className="hidden md:flex gap-2">
							<SignInButton />
							<ThemeToggle />
						</div>
					</NavigationMenuList>
				</NavigationMenu>
			</header>
		</ThemeProvider>
	);
}
