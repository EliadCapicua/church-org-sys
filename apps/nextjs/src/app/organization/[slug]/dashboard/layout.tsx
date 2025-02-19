import { WithUserRole } from "~/lib/utils/with-user-role";

const DashboardLayout = WithUserRole((props) => (
	<div className="h-screen overflow-hidden">
		<div className="h-[calc(100vh-64px)] overflow-auto">{props.children}</div>
	</div>
));

export default DashboardLayout;
