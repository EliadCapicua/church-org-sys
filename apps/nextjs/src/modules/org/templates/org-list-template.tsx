import { HydrateClient } from "@/trpc/server";

export default async function OrgListTemplate() {
	return (
		<HydrateClient>
			<main className="container h-screen py-16" data-testid="org-page">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
						IAFCJ <span className="text-primary">CO</span>
					</h1>
					<></>
				</div>
			</main>
		</HydrateClient>
	);
}
