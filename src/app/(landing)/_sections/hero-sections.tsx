import React from "react";
import Image from "next/image";
import posterHeader from "@/assets/image/suzume-poster.png";
import SectionHeading from "@/components/contents/section-heading";
export default function HeroSection() {
	return (
		<section className="w-full flex flex-col pt-12 px-8">
			<SectionHeading>Welcome to filmku Homepage</SectionHeading>
			{/* <div className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl bg-slate-600">
				<Image
					src={posterHeader}
					alt={"posterHeader"}
					className="object-cover w-full h-72 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
				/>
				<div className="p-4">
					<h1 className="text-4xl">Hello World</h1>
					<p className="">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum hic
						iste numquam itaque. Voluptate dolore obcaecati beatae hic adipisci
						id et aliquid minima assumenda, laborum error facilis quam explicabo
						quasi.
					</p>
				</div>
			</div> */}
			<div className="relative">
				<Image
					src={posterHeader}
					alt={"posterHeader"}
					className="object-cover w-full h-72 rounded-lg"
				/>

				<div className="absolute w-80 h-60 top-40 flex flex-col pl-3 ">
					<div className="px-4 py-2">
						<h4 className="text-xl font-body font-bold mb-2">
							Suzume Doors Open
						</h4>
						<p className="text-sm mb-2">hello hello hello hello hello</p>
						<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 rounded-lg">
							Watch Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
