import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export const socialIcon = (iconName: string) => {
	switch (iconName) {
		case "Linkedin":
			return <Linkedin size="20" />;

		case "Facebook":
			return <Facebook size="20" />;

		case "Instagram":
			return <Instagram size="20" />;

		case "iafcj":
			return (
				<Image
					src="/icon.png"
					alt="Logo Icon"
					width={32}
					height={32}
					className="rounded-full object-cover w-8 h-8"
				/>
			);
	}
};
