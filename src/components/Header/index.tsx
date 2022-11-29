import React from "react";
import Avatar from "./Avatar";
import Socials from "./Socials";
import avatar from "../../assets/avatar.webp";

function Header() {
	const name = "Victoria Cheng";
	const headline = "Software Developer | TypeScript | JavaScript | React | Express | MongoDB";

	return (
		<header className="mx-auto w-11/12 max-w-2xl">
			<div className="backdrop mb-8 flex flex-col gap-6 rounded-md bg-slate-50 bg-opacity-20 p-6">
				<Avatar src={avatar} alt={`${name} with a full orange background`} />
				<h1 className="text-center text-3xl font-bold tracking-wide">{name}</h1>
				<p className="text-center text-lg font-medium tracking-wide">
					{headline}
				</p>
			</div>
			<Socials />
		</header>
	);
}

export default Header;
