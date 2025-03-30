import NavbarLanding from "@/modules/landing/components/navbar/navbar-landing";
import type { PropsWithChildren } from "react";

const LandingLayout = (props: PropsWithChildren) => {
	return (
		<div className="flex flex-col flex-grow h-[calc(100vh-64px)] overflow-scroll scroll-smooth">
			<NavbarLanding />
			{props.children}
		</div>
	);
};

export default LandingLayout;
