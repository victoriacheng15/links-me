import React from "react";

interface AvatarProps {
	src: string;
	alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
	return (
		<div className="mx-auto w-[150px] mb-2">
			<img className="w-full" src={src} alt={alt} />
		</div>
	);
}

export default Avatar;
