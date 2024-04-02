import React from "react";
import SectionHeading from "@/components/contents/section-heading";
import Link from "next/link";
export default function CountinueSection() {
	return (
		<section className="w-full flex flex-col px-8 pt-12">
			<div className="flex justify-between bg-red-50">
				<SectionHeading> Continue Watching </SectionHeading>
				<Link href={"/"} className="text-gray-400">
					<button className="relative transition ease-in-out delay-75 hover:text-orange-400">
						See all
					</button>
				</Link>
			</div>
		</section>
	);
}
