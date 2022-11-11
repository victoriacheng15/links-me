import React from "react";

interface AvatarProps {
	src: string;
	alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
	return (
		<div className="mx-auto w-36 rounded-full border-2 border-blue-900">
			<img className="w-full" src={src} alt={alt} />
		</div>
	);
}

export default Avatar;
