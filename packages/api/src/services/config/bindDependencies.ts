import { OrgService } from "../org";

import { TYPES, container } from "./container";

export function bindDependencies() {
	container.bind(TYPES.OrgService).to(OrgService).inSingletonScope();
}
