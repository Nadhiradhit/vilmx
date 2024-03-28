import React from "react";
import IconGroup from "./_sections/icon-group";

export default function Footer() {
	return (
		<div className="w-full bg-gray-950 fixed bottom-0 px-8 py-4">
			<div className="flex justify-between lg:flex-col lg:justify-center items-center gap-2">
				<div className="flex flex-row gap-4">
					<IconGroup />
				</div>
				<div>
					<p className="text-sm text-gray-400">
						© 2023 Vilmx. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
