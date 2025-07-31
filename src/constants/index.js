import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const experiences = [
	{
		title: "Frontend Developer Intern",
		company_name: "DYNAMIC SOFT",
		icon: web,
		iconBg: "#383E56",
		date: "Mar 2024 - Jun 2024",
		points: [
			"Gained hands-on experience in frontend development, mastering fundamental coding principles, best practices.",
			"Developed and optimized clean, efficient, and maintainable code, contributing to a 95% project success rate.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Collaborated with senior developers and mentors to enhance my knowledge of React, JavaScript, TypeScript",
		],
	},
	{
		title: "Junior Frontend Developer",
		company_name: "Limsa",
		icon: mobile,
		iconBg: "#E6DEDD",
		date: "Jul 2024 - Yan 2025",
		points: [
			"Designed and implemented a dynamic, user-friendly interface for the Dubai-based Autozoom car rental platform using React.js, ensuring seamless user experience and 100% responsiveness across all devices.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Developed and integrated frontend solutions for 1k customer support, significantly reducing issue resolution time.",
			"Collaborated with backend developers, UI/UX designers, and stakeholders to align frontend functionalities.",
		],
	},
	{
		title: "Full-stack Developer ",
		company_name: "Self-employed",
		icon: creator,
		iconBg: "#383E56",
		date: "Apr 2025 - Present",
		points: [
			"Built 100% responsive frontend interfaces with React.js, Next.js, for smooth user experience.",
			"Managed app state and styling for scalable and clean UI.",
			"Developed 50% faster response APIs and real-time features using Node.js, Express, Socket.io and MongoDB",
			"• Integrated Firebase auth and Stripe payments; collaborated with teams for delivery.",
		],
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

const missions = [
	"To become a highly skilled and creative software engineer who builds useful, reliable, and user-friendly applications that make people's lives better and easier.",
	"To grow into a developer who not only writes clean and scalable code, but also contributes to meaningful projects, shares knowledge with the community.",
	"Continuous Learning, Integrity Responsibility, User-Centered Design, Collaboration over Competition, Problem-Solving Mindset",
];

export { services, technologies, experiences, missions, projects };
