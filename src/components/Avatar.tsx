import React from "react";

interface AvatarProps {
	src: string;
	alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
	return (
		<div className="mx-auto mb-2 w-[150px]">
			<img className="w-full" src={src} alt={alt} />
		</div>
	);
}

export default Avatar;
