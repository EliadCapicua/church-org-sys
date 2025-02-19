import type { LayoutWithoutUserProps } from "~/lib/utils/without-user";

export default function LandingLayout(props: LayoutWithoutUserProps) {
    return <div>{props.children}</div>;
}
