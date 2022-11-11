import React from "react";
import Link from "./Link";
import { linksList } from "../data/links";

function Main() {
	return (
		<main className="flex w-11/12 max-w-2xl flex-col gap-10 py-10">
			{linksList
				.filter(({ category }) => !category)
				.map((link) => (
					<Link key={link.title} {...link} />
				))}
		</main>
	);
}

export default Main;
