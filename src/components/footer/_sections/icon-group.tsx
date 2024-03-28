import React from "react";
import Link from "next/link";
import { socialLink } from "@/config/navigation";
export default function IconGroup() {
	return (
		<>
			{socialLink.map((link, socialLink) => {
				return (
					<Link
						key={socialLink}
						href={link.href}
						className="icon-footer transition ease-in-out delay-75">
						<ul>
							<li>{link.icon}</li>
						</ul>
					</Link>
				);
			})}
		</>
	);
}
