"use client";

import { useEffect } from "react";

export default function SignInTemplate() {
	useEffect(() => {
		if (window) {
			window.sessionStorage.clear();
		}
	}, []);

	return (
		<div
			className="flex flex-col w-full items-center justify-center h-[calc(80vh)] gap-4 relative"
			data-testid="login-page"
		>
			<></>
		</div>
	);
}
