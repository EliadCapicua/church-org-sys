import { ArrowUpToLine } from "lucide-react";
import Link from "next/link";

export default function ScrollToTop() {
	return (
		<Link
			rel="noreferrer noopener"
			href="#nav"
			className="fixed bottom-4 right-4 opacity-90 shadow-md bg-primary text-white p-2 rounded-md"
		>
			<ArrowUpToLine className="h-4 w-4" />
		</Link>
	);
}
