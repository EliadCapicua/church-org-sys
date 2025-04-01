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
					width={40}
					height={40}
					className="rounded-full object-cover w-16 h-16"
				/>
			);
	}
};
