import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Taarini Mullick",
	headline: "Aspiring Innovator | Full-Stack Developer | AI Enthusiast",
	bio: "A results-driven computer science student at [Your University] with a passion for building disruptive, scalable, and user-centric applications. Eager to leverage modern technologies to solve real-world problems and drive impactful change. Currently seeking high-growth internship opportunities for Summer 202X.",

	// Your contact email
	email: "taarini.mullick@gmail.com",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/taarini-mullick-1a93672b5/" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		"Java", "C++", "Supervised Learning", "Image Classification", 
		"Python", 
	],

	// Add your projects here
	projects: [
		{
			title: "Project 'Synergy'",
			description: "A decentralized, AI-powered platform to streamline cross-functional team collaboration using a novel blockchain consensus algorithm. Built with a microservices architecture.",
			stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "VibeCheck",
			description: "A mobile-first social app that uses sentiment analysis to curate positive news feeds. Leveraged serverless functions for infinite scalability and low-cost operation.",
			stack: ["React Native", "Firebase", "Google Cloud Functions", "NLP.js"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "AlgoVisualizer",
			description: "A web-based tool for visualizing complex data structures and algorithms, built to help students (like me) understand core CS concepts in an interactive way.",
			stack: ["TypeScript", "React", "D3.js"],
			githubLink: "",
			liveLink: "",
		},
	],

	// Add your experience here
	experience: [
		{
			role: "Software Engineer Intern (Incoming)",
			company: "Big Tech Co / FAANG",
			date: "Summer 202X",
			location: "Menlo Park, CA (Remote)",
			description: "Selected for a highly competitive internship program. Will be joining the [Cloud/AI/Growth] team to work on high-impact, customer-facing features."
		},
		{
			role: "Club President / Co-Founder",
			company: "[Your Vibe-Coding Club Name]",
			date: "Aug 202X - Present",
			location: "[Your University]",
			description: "Grew the organization from 5 to 200+ members by fostering a culture of innovation and 'vibecoding.' Organized tech talks with industry leaders from Google, Meta, and hot startups."
		},
		{
			role: "Teaching Assistant - Intro to CS",
			company: "[Your University]",
			date: "Jan 202X - May 202X",
			location: "[Your University]",
			description: "Mentored 50+ students, held office hours, and graded assignments for foundational computer science concepts. Received a 95% positive feedback rating from students."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science",
			institution: "UCLA",
			date: "Expected June 2029",
			note: "Minor in Bioinformatics"
		}
	]
};

export default PORTFOLIO_DATA;