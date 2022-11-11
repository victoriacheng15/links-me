import React from "react";
import LinkElement from "./LinkElement";
import { linksList } from "../data/links";

function Socials() {
	const imgFormatter = (title: string) =>
		title.toLowerCase().split(" ").join("");

	return (
		<ul className="flex justify-center gap-8">
			{linksList
				.filter(({ category }) => category)
				.map(({ title, address }) => (
					<li key={title}>
						<LinkElement address={address}>
							<div className="w-[45px] rounded-lg bg-blue-200 p-2 backdrop-blur-3xl backdrop-filter duration-300 ease-in-out hover:scale-125">
								<img src={`./${imgFormatter(title)}.svg`} alt={title} />
							</div>
						</LinkElement>
					</li>
				))}
		</ul>
	);
}

export default Socials;
