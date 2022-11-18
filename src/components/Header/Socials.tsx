import React from "react";
import LinkElement from "../Main/LinkElement";
import { linksList } from "../../data/links";

function Socials() {
	const imgFormatter = (title: string) =>
		title.toLowerCase().split(" ").join("");

	return (
		<ul className="flex justify-center gap-8">
			{linksList
				.filter(({ category }) => category)
				.map(({ title, address }) => (
					<li
						key={title}
						className="backdrop rounded-lg bg-blue-200 duration-300 ease-in-out hover:scale-125"
					>
						<LinkElement address={address}>
							<img
								className="aspect-square w-14 p-2"
								src={`./socials/${imgFormatter(title)}.svg`}
								alt={title}
							/>
						</LinkElement>
					</li>
				))}
		</ul>
	);
}

export default Socials;
