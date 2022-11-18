import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	const name = "Victoria Cheng";
	const built = "Built with TS React and Tailwind CSS";

	return (
		<footer className="backdrop mt-auto grid w-full place-items-center bg-blue-900 bg-opacity-50">
			<p className="py-3 text-center text-sm font-medium tracking-wide">
				&copy; {year} {name} | {built}
			</p>
		</footer>
	);
}

export default Footer;
