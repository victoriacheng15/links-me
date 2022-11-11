import React from "react";

interface AvatarProps {
	src: string;
	alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
	return (
		<div className="mx-auto mb-4 w-[150px] border-4 rounded-full border-slate-200">
			<img className="w-full" src={src} alt={alt} />
		</div>
	);
}

export default Avatar;
