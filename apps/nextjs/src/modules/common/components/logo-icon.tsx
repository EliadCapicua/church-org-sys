import Image from "next/image";

interface LogoIconProps {
	width?: number;
	height?: number;
}

export default function LogoIcon({ width = 32, height = 32 }: LogoIconProps) {
	return (
		<Image
			src="/icon.png"
			alt="Logo Icon"
			width={width}
			height={height}
			className="rounded-full object-cover"
			loading="lazy"
			priority={false}
			blurDataURL="/icon.png"
			quality={100}
		/>
	);
}
