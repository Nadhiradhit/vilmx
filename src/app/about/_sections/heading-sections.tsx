"use client";
import { motion } from "framer-motion";
import React from "react";
import { IoArrowDown } from "react-icons/io5";

export default function HeadingSection() {
	return (
		<>
			<div className="relative mt-16 h-80 lg:mt-8">
				<motion.div
					initial={{
						y: -100,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{ ease: "easeInOut", duration: 0.6 }}
					className="my-20">
					<h6 className="font-extrabold text-[1.5rem] text-orange-400">
						About
					</h6>
					<div className="lg:px-3 py-8">
						<h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold">
							Learn more about Vilmx and what we offer !
						</h3>
					</div>
				</motion.div>
				<div>
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{ ease: "easeInOut", duration: 0.6 }}
						className="bg-[#7c491f] absolute -top-[20rem] -z-10 hidden lg:block right-[45rem] h-[20rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></motion.div>
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{ ease: "easeInOut", duration: 0.6 }}
						className="bg-[#2c2b2a] absolute top-[15rem] -z-10 hidden lg:block left-[-55rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></motion.div>
				</div>
			</div>
			<motion.div
				initial={{
					y: 100,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{ ease: "easeInOut", duration: 1 }}
				className="mt-2 md:mt-5 lg:mt-20 xl:my-32 lg:px-48 cursor-pointer">
				<h6 className="text-orange-400 font-semibold">Our Vilmx</h6>
				<p className="my-4">
					Lorem Vilmx is a website for you to watch movies and series online.
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, fugit,
					pariatur reprehenderit incidunt deserunt eius dolores quibusdam ad,
					delectus accusamus doloribus quod nostrum ex dolorem vitae! Iste
					labore rerum adipisci.
				</p>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{ ease: "easeInOut", duration: 1.5 }}
				className="flex flex-col justify-center items-center gap-4 animate-bounce duration-500 my-2">
				<p>Scroll Down</p>
				<IoArrowDown className="size-8" />
			</motion.div>
		</>
	);
}
