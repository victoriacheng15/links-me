import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	const name = "Victoria Cheng";
	const built = "Built with TS React and Tailwind CSS";

	return (
		<footer className="mt-auto">
			<p className=" text-base font-medium text-center tracking-wide">
				&copy; {year} {name} | {built}
			</p>
		</footer>
	);
}

export default Footer;
