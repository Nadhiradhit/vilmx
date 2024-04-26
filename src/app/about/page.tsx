"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutFilm from "@/assets/image/film.jpg";
export default function About() {
	return (
		<motion.section
			initial={{
				x: -100,
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
			}}
			transition={{ ease: "easeInOut", duration: 0.6 }}
			className="w-full flex flex-col pt-12 px-8">
			<div className="my-20">
				<h6 className="font-extrabold text-orange-400">About</h6>
				<div className="lg:px-3 py-8">
					<h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold">
						Learn more about Vilmx and what we offer !
					</h3>
				</div>
			</div>
			<div className="-mt-20 md:-mt-10 xl:my-20 lg:px-48">
				<h6 className="text-orange-400 font-semibold">Our Vilmx</h6>
				<p className="my-4">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nihil
					distinctio animi molestias sunt? Voluptate obcaecati corporis nemo,
					commodi velit vel, atque optio dolorum dicta sunt, incidunt quos ad
					iure!
				</p>
			</div>
			<div className="w-full py-24 grid lg:grid-cols-3 gap-8">
				<div className="flex xl:justify-center">
					<Image src={AboutFilm} alt="" className="w-96 h-52 rounded-lg" />
				</div>
				<div className="flex xl:items-center text-justify">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
						consequuntur. Voluptatibus neque facilis repudiandae obcaecati
						veritatis dolor veniam assumenda velit deserunt labore modi quis cum
						ipsum numquam, distinctio at saepe?
					</p>
				</div>
				<div className="flex xl:justify-center">
					<Image src={AboutFilm} alt="" className="w-96 h-52 rounded-lg" />
				</div>
				<div className="flex xl:items-center text-justify">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
						consequuntur. Voluptatibus neque facilis repudiandae obcaecati
						veritatis dolor veniam assumenda velit deserunt labore modi quis cum
						ipsum numquam, distinctio at saepe?
					</p>
				</div>
				<div className="flex xl:justify-center">
					<Image src={AboutFilm} alt="" className="w-96 h-52 rounded-lg" />
				</div>
				<div className="flex xl:items-center text-justify">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
						consequuntur. Voluptatibus neque facilis repudiandae obcaecati
						veritatis dolor veniam assumenda velit deserunt labore modi quis cum
						ipsum numquam, distinctio at saepe?
					</p>
				</div>
			</div>
		</motion.section>
	);
}
