import { bindDependencies } from "./config/bindDependencies";
import { TYPES, container } from "./config/container";
import type { OrgService } from "./org";

bindDependencies();

export const orgService = container.get<OrgService>(TYPES.OrgService);
