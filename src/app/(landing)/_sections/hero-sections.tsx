import React from "react";
import Image from "next/image";
import posterHeader from "@/assets/image/suzume-poster.png";
export default function HeroSection() {
	return (
		<section className="w-full flex flex-col pt-24 px-8">
			<h1 className="text-2xl font-bold pb-4">Welcome to filmku Homepage</h1>
			<div className="bg-slate-700 rounded-lg w-full h-auto flex items-center">
				<div className="p-4">
					<h1 className="text-4xl">Hello World</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum hic
						iste numquam itaque. Voluptate dolore obcaecati beatae hic adipisci
						id et aliquid minima assumenda, laborum error facilis quam explicabo
						quasi.
					</p>
				</div>
				<Image
					src={posterHeader}
					alt={"posterHeader"}
					className="w-full h-72 rounded-r-lg"
				/>
			</div>
		</section>
	);
}
