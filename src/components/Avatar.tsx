import React from "react";

interface AvatarProps {
	src: string;
	alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
	return (
		<>
			<img
				className="mx-auto aspect-square w-36 rounded-full border-2 border-blue-900"
				src={src}
				alt={alt}
			/>
		</>
	);
}

export default Avatar;
