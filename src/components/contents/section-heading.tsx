import React from "react";

type SectionHeadingProps = {
	children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
	return (
		<h2 className="text-lg md:text-2xl lg:text-4xl lg:m-2 py-2 font-semibold capitalize">
			{children}
		</h2>
	);
}
