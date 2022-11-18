import React from "react";

interface LinkElementProps {
	address: string;
	children: React.ReactNode;
}

function LinkElement({ address, children }: LinkElementProps) {
	return (
		<a href={address} target="_blank" rel="noreferrer">
			{children}
		</a>
	);
}

export default LinkElement;
