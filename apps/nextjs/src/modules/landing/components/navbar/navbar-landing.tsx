import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@acme/ui/navigation-menu";
import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
import LogoIcon from "common/components/logo-icon";
import Link from "next/link";
import { useLandingPage } from "../../hooks/useLandingPage";
import NavbarRoutes from "./navbar-routes";
import NavbarSheet from "./navbar-sheet";

export default function NavbarLanding() {
	const { routes, title } = useLandingPage();

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
								<h1 className="hidden md:inline">{title}</h1>
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
							{/* <SignInButton signIn={signIn} /> */}
							{/* <LocaleSwitcher /> */}
							<ThemeToggle />
						</div>
					</NavigationMenuList>
				</NavigationMenu>
			</header>
		</ThemeProvider>
	);
}
