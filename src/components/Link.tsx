import React from "react";
import LinkElement from "./LinkElement";

interface LinkProps {
	title: string;
	address: string;
	category?: string;
}

function Link({ title, address }: LinkProps) {
	return (
		<LinkElement address={address}>
			<div
				className="grid h-full w-full place-items-center rounded-2xl border-2 border-blue-300 
			bg-blue-600 bg-opacity-40 backdrop-blur-lg backdrop-filter duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80"
			>
				<span className="p-4 text-center text-xl tracking-wide">{title}</span>
			</div>
		</LinkElement>
	);
}

export default Link;
