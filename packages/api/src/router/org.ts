import { GetOrgSchema } from "@acme/validators";
import type { TRPCRouterRecord } from "@trpc/server";
import { orgService } from "../services";
import { organizationProcedure } from "../trpc";

export const orgRouter = {
	all: organizationProcedure.input(GetOrgSchema).query(async ({ ctx }) => {
		return orgService.getAll({ ctx });
	}),
	getUserRolesInOrg: organizationProcedure
		.input(GetOrgSchema)
		.query(async ({ ctx }) => {
			return orgService.getUserRolesInOrg({ ctx });
		}),
} satisfies TRPCRouterRecord;
