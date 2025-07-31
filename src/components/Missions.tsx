import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { missions } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const MissionCard = ({ index, mission }) => (
	<motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className="bg-[#090325] p-8 rounded-3xl xs:w-[320px] w-full">
		<p className="text-white font-black text-[48px]">"</p>
		<p className="text-[#aaa6c3] text-[14px] tracking-wider leading-[25px]">{mission}</p>
	</motion.div>
);

const Missions = () => {
	return (
		<div className={`mt-12 bg-[#100d25] rounded-[20px]`}>
			<div className={`bg-[#151030] rounded-2xl ${styles.padding} min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>My principles</p>
					<h2 className={styles.sectionHeadText}>Mission. Vision. Values.</h2>
				</motion.div>
			</div>
			<div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap lg:flex-nowrap gap-7`}>
				{missions.map((mission, index) => (
					<MissionCard key={mission} index={index} mission={mission} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Missions, "");
