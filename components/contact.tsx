"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-gray-700 text-center -mt-5 dark:text-white/80">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:tokhirjonkhasanov@gmail.com">
					tokhirjonkhasanov@gmail.com
				</a>{" "}
				or through this form.
			</p>

			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent successfully !");
				}}
			>
				<input
					className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
					 transition-all dark:outline-none"
					type="email"
					placeholder="Your email"
					name="senderEmail"
					required
					maxLength={500}
					autoComplete="off"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
					 transition-all dark:outline-none"
					placeholder="Your message"
					name="message"
					required
					maxLength={500}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
