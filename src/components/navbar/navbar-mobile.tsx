"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { GoX } from "react-icons/go";
import NavbarLinks from "./navbar-links";

// const sidebar = {
// 	open: (height = 1000) => ({
// 		clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
// 		transition: {
// 			type: "spring",
// 			stiffness: 20,
// 			restDelta: 2,
// 		},
// 	}),
// 	closed: {
// 		clipPath: "circle(0px at 100% 0)",
// 		transition: {
// 			type: "spring",
// 			stiffness: 400,
// 			damping: 40,
// 		},
// 	},
// };

export default function NavbarMobile() {
	const [navOpen, setNavOpen] = useState(false);

	const handleOpen = () => {
		setNavOpen((prev) => !prev);
	};

	return (
		<>
			{navOpen ? (
				<GoX
					id="close-dropdown"
					className="absolute right-8 top-6 cursor-pointer text-lg text-grey-900 md:hidden"
					onClick={handleOpen}
					size={28}
				/>
			) : (
				<FiMenu
					id="open-dropdown"
					className="absolute right-8 top-6 cursor-pointer text-lg text-grey-900 md:hidden"
					onClick={handleOpen}
					size={28}
				/>
			)}
			<ul
				className={`absolute right-0 top-0 h-screen w-screen pt-16 bg-gray-700/20 backdrop-blur-[0.5rem] p-8 overflow-y-hidden ${
					navOpen ? "top-16" : "top-[-300px] hidden"
				}`}>
				<li className="text-2xl flex flex-col gap-8">
					<NavbarLinks />
				</li>
			</ul>
		</>
	);
}
