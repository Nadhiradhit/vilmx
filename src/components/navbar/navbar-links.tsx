"use client";
import { links } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link, name) => {
				const isActive = pathname === link.href;
				return (
					<Link
						key={name}
						href={link.href}
						className={
							isActive
								? "active"
								: "hover:text-orange-400 transition ease-in-out delay-75"
						}>
						<ul>
							<li>{link.name}</li>
						</ul>
					</Link>
				);
			})}
		</>
	);
}
