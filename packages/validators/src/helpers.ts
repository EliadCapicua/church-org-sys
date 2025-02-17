import { z } from "zod";

export const OrganizationProcedureSchema = z.union([
	z.object({ orgSlug: z.string() }),
	z.object({ orgId: z.string() }),
]);
