"use client";
import { useEffect } from "react";
import Link from "next/link";
import NavbarLinks from "./navbar-links";
import NavbarMobile from "./navbar-mobile";

export default function Navbar() {
	useEffect(() => {
		const handleScroll = () => {};
	}, []);
	return (
		<div className="fixed top-0 z-20 h-[72px] w-full bg-gray-900">
			<nav className="flex items-center justify-between h-full max-w-screen-2xl mx-auto px-8">
				<Link href={"/"} className="flex items-center gap-4">
					<h3 className="text-xl font-bold">Vilmx</h3>
				</Link>
				<NavbarMobile />
				<div className="md:flex hidden gap-4">
					<NavbarLinks />
				</div>
			</nav>
			{/* Navbar Mobile */}
			<nav className="w-full bg-gray-500/30 p-2 hidden">
				<div className="flex flex-col gap-6 items-center">
					<NavbarLinks />
				</div>
			</nav>
		</div>
	);
}
