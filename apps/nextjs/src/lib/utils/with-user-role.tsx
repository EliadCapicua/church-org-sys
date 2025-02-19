import { api } from "@/trpc/server";
import { type Session, auth } from "@acme/auth";
import { redirect } from "next/navigation";
import type { SearchParams } from "../types/search-params";

export interface PageProps<
	SearchBy extends string | undefined = undefined,
	SortBy extends string | undefined = undefined,
	GroupBy extends string | undefined = undefined,
> {
	params: {
		slug: string;
		patientId: string;
		staffMemberId: string;
		insurerId: string;
		insuranceId: string;
		serviceTypeId: string;
	};
	searchParams: SearchParams<SearchBy, SortBy, GroupBy>;
}

export interface LayoutProps<
	SearchBy extends string | undefined = undefined,
	SortBy extends string | undefined = undefined,
	GroupBy extends string | undefined = undefined,
> extends PageProps<SearchBy, SortBy, GroupBy> {
	children: React.ReactNode;
}

export interface WithUserRoleProps<
	SearchBy extends string | undefined,
	SortBy extends string | undefined,
	GroupBy extends string | undefined,
> extends LayoutProps<SearchBy, SortBy, GroupBy> {
	session: Session;
	slug: string;
}

export const WithUserRole = <
	SearchBy extends string | undefined,
	SortBy extends string | undefined,
	GroupBy extends string | undefined = undefined,
>(
	Component: React.ComponentType<WithUserRoleProps<SearchBy, SortBy, GroupBy>>,
) => {
	return async (props: LayoutProps<SearchBy, SortBy, GroupBy>) => {
		const session = await auth();
		if (!session) redirect("/");

		const userRoles = await api.org.getUserRolesInOrg({
			orgSlug: props.params.slug,
		});

		if (!userRoles.length) redirect("/");

		return <Component {...props} session={session} slug={props.params.slug} />;
	};
};
