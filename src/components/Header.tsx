import React from "react";
import Avatar from "./Avatar";
import Socials from "./Socials";
import avatar from "../assets/avatar.png";

function Header() {
	const name = "Victoria Cheng";
	const headline = "Packaging Engineer to Software Developer";

	return (
		<header className="mx-auto w-[90%] text-center">
			<Avatar src={avatar} alt={`${name} with a full orange background`} />
			<h1 className="mb-2 text-3xl font-bold tracking-wide">{name}</h1>
			<p className="mb-8 text-xl font-medium tracking-wide">{headline}</p>
			<Socials />
		</header>
	);
}

export default Header;
