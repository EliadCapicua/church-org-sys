import { ClientOnly } from "modules/common/components/client-only";

export default async function LocationsTemplate() {
	return (
		<ClientOnly>
			<div className="flex flex-col flex-grow h-[calc(100vh-64px)] overflow-scroll scroll-smooth">
				<div className="flex flex-1 flex-col gap-4 p-4">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="aspect-video rounded-xl bg-muted/50" />
						<div className="aspect-video rounded-xl bg-muted/50" />
						<div className="aspect-video rounded-xl bg-muted/50" />
					</div>
					<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
				</div>
			</div>
		</ClientOnly>
	);
}
