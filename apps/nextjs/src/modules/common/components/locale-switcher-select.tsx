"use client";

import type { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { cn } from "@acme/ui";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@acme/ui/select";
import { useState, useTransition } from "react";

type Props = {
	defaultValue: string;
	items: Array<{ value: string; label: string }>;
	label: string;
};

export default function LocaleSwitcherSelect({
	defaultValue,
	items,
	label,
}: Props) {
	const [selectedLocale, setSelectedLocale] = useState(defaultValue);
	const [isPending, startTransition] = useTransition();

	function onChange(value: string) {
		const locale = value as Locale;
		startTransition(() => {
			setUserLocale(locale);
		});
		setSelectedLocale(locale);
	}

	return (
		<Select
			value={selectedLocale}
			onValueChange={onChange}
			disabled={isPending}
			aria-label={label}
		>
			<SelectTrigger disabled={isPending} className="gap-2">
				{items.find((item) => item.value === selectedLocale)?.label}
			</SelectTrigger>
			<SelectContent>
				{items.map((item) => (
					<SelectItem
						key={item.value}
						value={item.value}
						className={cn(
							"flex flex-row items-center justify-between w-full px-3 py-2 text-sm",
							{
								"bg-primary-100": item.value === selectedLocale,
							},
						)}
					>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
