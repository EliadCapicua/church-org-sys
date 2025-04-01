import { cn } from "@acme/ui";
import { Toaster } from "@acme/ui/toast";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import "@/app/globals.css";

import { env } from "@/env";
import { ThemeProvider } from "@acme/ui/theme";

export const metadata: Metadata = {
	metadataBase: new URL(
		env.VERCEL_ENV === "production"
			? "https://turbo.t3.gg"
			: "http://localhost:3000",
	),
	title: "Iafcj Colombia",
	description: "Iafcj Colombia",
	icons: {
		icon: "/icon.png",
	},
	openGraph: {
		title: "Iafcj Colombia",
		description: "Iafcj Colombia",
		url: "https://www.iafcj.co",
		siteName: "Iafcj Colombia",
		type: "website",
		locale: "es_CO",
		images: [
			{
				url: "https://www.iafcj.co/icon.png",
				alt: "Iafcj Colombia",
				width: 1200,
				height: 630,
			},
		],
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default async function RootLayout(props: { children: React.ReactNode }) {
	const locale = await getLocale();
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" type="image/png" href="/icon.png" />
			</head>
			<body
				className={cn(
					"h-screen max-h-screen overflow-hidden bg-background font-inter text-foreground antialiased",
					inter.variable,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<NextIntlClientProvider messages={messages}>
						<TRPCReactProvider>{props.children}</TRPCReactProvider>
					</NextIntlClientProvider>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
