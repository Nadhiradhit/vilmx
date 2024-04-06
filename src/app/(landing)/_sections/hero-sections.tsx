"use client";
import React from "react";
import Image from "next/image";
import posterHeader from "@/assets/image/suzume-poster.png";
import SectionHeading from "@/components/contents/section-heading";
import useSWR from "swr";
import SkeletonHeader from "@/components/contents/skeleton";
import { BsFillPlayCircleFill } from "react-icons/bs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HeroSection() {
	return (
		<section className="w-full flex flex-col pt-12 px-8">
			<SectionHeading>
				Welcome to <span className="text-orange-400">Vilmx</span> Homepage
			</SectionHeading>
			<div className="relative">
				<Image
					src={posterHeader}
					alt={"posterHeader"}
					className="object-top w-full h-72 rounded-t-lg md:rounded-lg  "
				/>
				<div className="md:absolute md:rounded-lg md:top-0 md:left-0 md:w-full md:h-full md:bg-gradient-to-r md:from-gray-900 md:to-transparent"></div>
				<div className="md:absolute md:h-60 md:top-40 flex flex-col lg:pl-3 ">
					<div className="px-3 py-4 md:px-4 md:py-2  w-full bg-slate-800 rounded-b-lg md:bg-transparent md:rounded-none">
						<h4 className="md:text-2xl font-body font-bold mb-2">
							Suzume Doors Open
						</h4>
						<p className="text-xs md:text-sm mb-2 line-clamp-2 md:line-clamp-1">
							This is a film made by Suzume Chan, it`s a story about this Lorem
							ipsum dolor sit, amet consectetur adipisicing elit.
						</p>
						<button className="bg-orange-500 hover:bg-orange-600 text-sm text-white py-2 px-2 rounded-lg w-full inline-flex justify-center items-center gap-2 md:w-40 font-semibold lg:font-bold">
							<BsFillPlayCircleFill size={18} />
							<span>Watch Now</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
