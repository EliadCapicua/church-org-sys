import type { LayoutWithoutUserProps } from "~/lib/utils/without-user";

export default function AuthLayout(props: LayoutWithoutUserProps) {
	return <div>{props.children}</div>;
}
