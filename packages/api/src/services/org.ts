import { injectable } from "inversify";
import type { OrganizationProcedureContext } from "../trpc";
import { BaseService } from "./base";

@injectable()
export class OrgService extends BaseService {
	async getAll({
		ctx,
	}: {
		ctx: OrganizationProcedureContext;
	}) {
		return ctx.prisma.organization.findMany({
			where: {
				OR: [
					{ Admins: { some: { userId: ctx.session.user.id } } },
					{ Managers: { some: { userId: ctx.session.user.id } } },
					{ Owners: { some: { userId: ctx.session.user.id } } },
				],
			},
			orderBy: {
				createdAt: "desc",
			},
			take: 10,
		});
	}
}
