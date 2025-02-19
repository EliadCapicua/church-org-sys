"use client";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@acme/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import type { RouteProps } from "~/modules/common/types/route";
import NavbarRoutes from "./navbar-routes";
import SignInButton from "./sign-in-button";

interface Props {
	routeList: RouteProps[];
}

export default function NavbarSheet({ routeList }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger className="px-2">
				<Menu
					className="flex md:hidden h-5 w-5"
					onClick={() => setIsOpen(true)}
				>
					<span className="sr-only">Menu Icon</span>
				</Menu>
			</SheetTrigger>

			<SheetContent side={"left"}>
				<SheetHeader>
					<SheetTitle className="font-bold text-xl">Shadcn/React</SheetTitle>
				</SheetHeader>
				<nav className="flex flex-col justify-center items-center gap-2 mt-4">
					<NavbarRoutes routeList={routeList} />
					<SignInButton />
				</nav>
			</SheetContent>
		</Sheet>
	);
}
