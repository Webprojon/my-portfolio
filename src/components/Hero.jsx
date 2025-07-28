import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";

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

			<div className="absolute xs:bottom-10 bottom-4 w-full flex items-center justify-center">
				<a href="#about">
					<div className="w-[32px] h-[55px] rounded-3xl border-4 flex justify-center items-start p-2 border-[#aaa6c3]">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
							className="w-3 h-3 rounded-full bg-[#aaa6c3]"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
