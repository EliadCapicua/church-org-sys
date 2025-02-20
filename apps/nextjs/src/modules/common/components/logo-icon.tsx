import Image from "next/image";

export default function LogoIcon() {
	return (
		<Image
			src="/icon.png"
			alt="Logo Icon"
			width={32}
			height={32}
			className="rounded-full w-8 h-8 object-cover"
		/>
	);
}
