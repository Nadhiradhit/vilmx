import React from "react";
import SectionHeading from "@/components/contents/section-heading";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import posterHeader from "@/assets/image/suzume-poster.png";
import { BsPlayCircleFill } from "react-icons/bs";
export default function CountinueSection() {
	return (
		<section className="w-full flex flex-col pt-12 px-8">
			<div className="flex justify-between items-center">
				<SectionHeading> Continue Watching </SectionHeading>
				<Link href={"/"} className="text-gray-400">
					<button className="inline-flex items-center gap-1 transition ease-in-out delay-75 hover:text-orange-400">
						<span className="hidden md:block">See all</span>
						<GoChevronRight />
					</button>
				</Link>
			</div>
			<div className="flex flex-col lg:flex-row lg:flex-grow gap-4">
				<div className="relative">
					<Image src={posterHeader} alt="" className=" h-52 rounded-lg" />
					<div className="absolute top-[9.5rem] left-0 w-full h-full">
						<div className="bg-gradient-to-r from-orange-500 to-transparent p-4 w-full h-14 flex items-center rounded-lg gap-4">
							<BsPlayCircleFill size={30} />
							<div className="">
								<p>S1 E1</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative">
					<Image src={posterHeader} alt="" className=" h-52 rounded-lg" />
					<div className="absolute top-[9.5rem] left-0 w-full h-full">
						<div className="bg-gradient-to-r from-orange-500 to-transparent p-4 w-full h-14 flex items-center rounded-lg gap-4">
							<BsPlayCircleFill size={30} />
							<div className="">
								<p>S1 E1</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative">
					<Image src={posterHeader} alt="" className=" h-52 rounded-lg" />
					<div className="absolute top-[9.5rem] left-0 w-full h-full">
						<div className="bg-gradient-to-r from-orange-500 to-transparent p-4 w-full h-14 flex items-center rounded-lg gap-4">
							<BsPlayCircleFill size={30} />
							<div className="">
								<p>S1 E1</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative">
					<Image src={posterHeader} alt="" className=" h-52 rounded-lg" />
					<div className="absolute top-[9.5rem] left-0 w-full h-full">
						<div className="bg-gradient-to-r from-orange-500 to-transparent p-4 w-full h-14 flex items-center rounded-lg gap-4">
							<BsPlayCircleFill size={30} />
							<div className="">
								<p>S1 E1</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
