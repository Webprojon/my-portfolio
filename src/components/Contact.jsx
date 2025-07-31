import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_oe9jdne",
				"template_bch3app",
				{
					form_name: form.name,
					to_name: "Tokhirjon",
					form_email: form.email,
					to_email: "tokhirjonkhasanov@gmail.com",
					message: form.message,
				},
				"kFSFly9oonuv6HMA_",
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possiable");
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went wrong !");
				},
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl">
				<p className={styles.sectionSubText}>Get in touch</p>
				<h2 className={styles.sectionHeadText}>Contact.</h2>
				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name ?"
							className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email ?"
							className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows="6"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say ?"
							className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button type="submit" className="bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer">
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
