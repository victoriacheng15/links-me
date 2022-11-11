import React from "react";
import { linksList } from "../data/links";

function Socials() {
	const imgFormatter = (title: string) =>
		title.toLowerCase().split(" ").join("");

	return (
		<ul className="flex justify-center gap-6">
			{linksList.map(({ category, title, address }) => {
				if (category === "social") {
					return (
						<li key={title} className="social">
							<a href={address} target="_blank" rel="noreferrer">
								<img src={`./${imgFormatter(title)}.svg`} alt={title} />
							</a>
						</li>
					);
				}
			})}
		</ul>
	);
}

export default Socials;
