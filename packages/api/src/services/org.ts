import { UserRole } from "@acme/common";
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

	async getUserRolesInOrg({
		ctx,
	}: {
		ctx: OrganizationProcedureContext;
	}) {
		const org = await ctx.prisma.organization.findFirst({
			where: {
				slug: ctx.session.organization.slug,
			},
			include: {
				Admins: { where: { userId: ctx.session.user.id } },
				Managers: { where: { userId: ctx.session.user.id } },
				Owners: { where: { userId: ctx.session.user.id } },
			},
		});
		const roles: UserRole[] = [];

		if (org?.Owners.length) {
			roles.push(UserRole.OWNER);
		}
		if (org?.Managers.length) {
			roles.push(UserRole.MANAGER);
		}
		if (org?.Admins.length) {
			roles.push(UserRole.ADMIN);
		}

		return roles;
	}
}
