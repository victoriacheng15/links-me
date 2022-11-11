import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	const name = "Victoria Cheng";
	const built = "Built with TS React and Tailwind CSS";

	return (
		<footer className="mt-auto w-full">
			<div className="grid h-full place-items-center bg-blue-900 bg-opacity-50 backdrop-blur-lg backdrop-filter">
				<p className="py-3 text-center text-sm font-medium tracking-wide">
					&copy; {year} {name} | {built}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
