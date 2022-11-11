import React from "react";
import LinkElement from "./LinkElement";

interface LinkProps {
	title: string;
	address: string;
	category?: string;
}

function Link({ title, address }: LinkProps) {
	return (
		<>
			<LinkElement address={address}>
				<div className="backdrop grid place-items-center rounded-lg border-2 bg-blue-600 bg-opacity-40 p-4 duration-300 ease-in-out hover:rotate-1 hover:scale-105">
					<span className="text-2xl font-semibold tracking-wide">{title}</span>
				</div>
			</LinkElement>
		</>
	);
}

export default Link;
