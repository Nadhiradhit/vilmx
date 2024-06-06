"use client";
import React from "react";
import Image from "next/image";
import AboutFilm from "@/assets/image/film.jpg";
import { motion } from "framer-motion";
export default function MainContent() {
	const HeadingText = "Vilmx is a great website for film lovers.".split("");

	return (
		<>
			<div className="w-full mt-4">
				<div className="text-center">
					{HeadingText.map((text, i) => (
						<motion.span
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							transition={{
								duration: 0.25,
								delay: i / 10,
								repeatDelay: 3,
								repeat: Infinity,
								repeatType: "reverse",
							}}
							key={i}
							className="text-7xl font-semibold font-heading">
							{text}
							{""}
						</motion.span>
					))}
				</div>
				<div className="w-full flex justify-center items-center gap-5 my-20">
					<Image
						src={AboutFilm}
						alt="film"
						width={500}
						height={300}
						className="mt-4 rounded-lg"
					/>
					<div className="absolute w-full">
						<div className="text-8xl font-semibold ">
							<p className="absolute left-64 bottom-0 ">Explore More </p>
							<p className="absolute right-64 top-0">About Vilmx</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
