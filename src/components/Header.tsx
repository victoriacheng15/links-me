import React from "react";
import Avatar from "./Avatar";
import avatar from "../assets/avatar.png";

function Header() {
	const name = "Victoria Cheng";
	const headline = "Packaging Engineer to Software Developer";

	return (
		<header className="mx-auto w-[90%] text-center">
			<Avatar src={avatar} alt={`${name} with a full orange background`} />
			<div>
				<h1 className="font-bold text-3xl mb-4 tracking-wide">{name}</h1>
				<p className="font-bold text-xl tracking-wide">{headline}</p>
			</div>
		</header>
	);
}

export default Header;
