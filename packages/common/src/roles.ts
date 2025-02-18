export const UserRole = {
	OWNER: "Organization Owner",
	ADMIN: "Admin",
	MANAGER: "Manager",
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
