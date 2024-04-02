import React from "react";

type SectionHeadingProps = {
	children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
	return (
		<h2 className="text-2xl lg:text-4xl mb-10 font-semibold capitalize">
			{children}
		</h2>
	);
}
