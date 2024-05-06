import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import workoutImg from "@/public/workout.png";
import bankingImg from "@/public/banking.png";
import itplanetImg from "@/public/it-plant.png";
import rmtdevImg from "@/public/rmtdev.png";
import corpcommentImg from "@/public/corpcomment.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated bootcamp",
		location: "Online",
		description:
			"I graduated after 7 months of studying. I immediately tried to get a job as a front-end developer.",
		icon: React.createElement(LuGraduationCap),
		date: "Jun 2022",
	},
	{
		title: "Junior Front-end apprenticeship ",
		location: "Remote - The Rolling Scopes School EPAM ",
		description:
			"I worked as a junior front-end developer for 4 month and I upskilled to the some other tools.",
		icon: React.createElement(CgWorkAlt),
		date: "Sep 2022 - Dec 2022",
	},
	{
		title: "React developer",
		location: "Remote - Dynamic Soft",
		description:
			"I utilized React and Redux to create dynamic user interfaces and interactive web components for project, Improved fault tolerance from 85 to 99 percent of the application by creating user interface. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "Apr 2023 - Jul 2023",
	},
	{
		title: "Front-end developer",
		location: "Remote - Freelancing",
		description:
			"Increased test-coverage by 99 percent using go mock framework and abstraction Implemented with cross-functional teams including designers and backend developers to translate design specifications into functional user interfaces and Agile/Scrum environment. Improved 90 percent RESTful APIs to fetch and display data from backend services, ensuring accurate and real-time data updates in the application",
		icon: React.createElement(FaReact),
		date: "Sep 2023 - Present",
	},
] as const;

export const projectsData = [
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["Javascript", "HTML", "CSS"],
		imageUrl: rmtdevImg,
		proLink: "https://rmtdevjobs.netlify.app/",
	},
	{
		title: "IT-Planet - Dec 2022",
		description:
			"Developed learning website, more than 5 courses about IT development, Involved 100 percent with React Router Dom to navigate different pages ",
		tags: ["React", "Next.js", "SASS", "Hooks", "Typewriter", "Git"],
		imageUrl: itplanetImg,
		proLink: "https://itplanet.netlify.app/",
	},
	{
		title: "CorpComment",
		description:
			"Amazing mini web app that users can give public feedback to companies.",
		tags: ["Javascript", "HTML", "CSS"],
		imageUrl: corpcommentImg,
		proLink: "https://giving-feedbacks.netlify.app/",
	},
	{
		title: "Banking - June 2023",
		description:
			"Built web app for tranferring moneys, you can do a lot : Transfer money, Request to loan, Create/Close account. I enjoyed working with pure javascript in this app and it brought me great knowledge ",
		tags: ["Javascript", "HTML", "Git", "CSS"],
		imageUrl: bankingImg,
		proLink: "https://webprojon.github.io/banking-pure-javascript/",
	},
	{
		title: "Workout - March 2023",
		description:
			"Created 100 percent working workout platform, and used Geolocation API to get location and pin address that you work ",
		tags: ["JavaScript", "HTML", "CSS", "Git", "LocalStorage"],
		imageUrl: workoutImg,
		proLink: "https://webprojon.github.io/Make-Workout/",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"SASS",
	"Bootstrap",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"NPM",
	"Tailwind",
	"Redux",
	"GraphQL",
	"Framer Motion",
	"Problem solving",
	"Interactive learner",
	"Good communication",
] as const;
