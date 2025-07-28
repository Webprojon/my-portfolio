import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen">
			<div className={`${styles.paddingX} absolute top-[110px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 h-80 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, l'm <span className="text-[#915eff] ">Tokhirjon</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-[#f3f3f3]`}>l develop user interfaces and web applications</p>
				</div>
			</div>

			<ComputersCanvas />
		</section>
	);
};

export default Hero;
