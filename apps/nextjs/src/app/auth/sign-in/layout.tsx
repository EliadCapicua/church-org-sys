import type { LayoutWithoutUserProps } from "@/lib/utils/without-user";
import { HydrateClient } from "@/trpc/server";

export default function SignInLayout(props: LayoutWithoutUserProps) {
	return (
		<HydrateClient>
			<div className="flex">{props.children}</div>
		</HydrateClient>
	);
}
