"use client";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
export default function NavbarMobile() {
	const [navOpen, setNavOpen] = useState(false);

	function toggleNavbar() {}

	return (
		<button
			className="md:hidden block"
			title="Toggle Button"
			type="button"
			onClick={toggleNavbar}>
			<FiAlignJustify size={32} />
		</button>
	);
}
