import type { ReactNode } from "react";
import "../styles/About.css";

interface Fact {
	label: string;
	value: string;
	detail: string;
}

interface Interest {
	title: string;
	text: string;
	icon: ReactNode;
}

// Snabbfakta som visas i panelen till höger.
const FACTS: Fact[] = [
	{ label: "Education", value: "Webbutvecklare.net", detail: "Final year" },
	{ label: "Internship", value: "Netic AB", detail: "My first internship" },
	{ label: "Currently building", value: "Scan2ERP", detail: "React · TypeScript · Node.js" },
];

// Ikonerna ritas med SVG så att de följer sidans färger.
const svg = (path: ReactNode) => (
	<svg
		viewBox="0 0 24 24"
		width="22"
		height="22"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		{path}
	</svg>
);

// Det jag gör när jag inte kodar.
const INTERESTS: Interest[] = [
	{
		title: "Gaming",
		text: "Minecraft, the Age of Empires series and fun simulator games I can play co-op with friends and family.",
		icon: svg(
			<>
				<rect x="2" y="7" width="20" height="10" rx="5" />
				<path d="M7 10v4M5 12h4" />
				<circle cx="16" cy="11" r="0.6" fill="currentColor" />
				<circle cx="18" cy="13" r="0.6" fill="currentColor" />
			</>,
		),
	},
	{
		title: "Martial arts",
		text: "I train  ju-jutsu.",
		icon: svg(
			<>
				<path d="M7 11V7a3 3 0 0 1 3-3h4a4 4 0 0 1 4 4v5a6 6 0 0 1-6 6h-1a4 4 0 0 1-4-4z" />
				<path d="M7 11h6a2 2 0 0 0 0-4" />
				<path d="M9 19v2h6v-2" />
			</>,
		),
	},
	{
		title: "Ford Mustang -69",
		text: "Bought it in 2019, rebuilt the engine and got it running with the help of manuals and YouTube. Debugging, but with a wrench.",
		icon: svg(
			<>
				<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
			</>,
		),
	},
	{
		title: "Scuba diving",
		text: "I dive every spring and summer, among other places on the Swedish west coast, with Amfibia – one of Sweden's oldest diving clubs.",
		icon: svg(
			<>
				{/* Dykmask med bubblor */}
				<path d="M3 11a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3l-1.5-2h-3L9 17H6a3 3 0 0 1-3-3z" />
				<circle cx="17" cy="4.5" r="1.3" />
				<circle cx="20.5" cy="2.5" r="0.8" />
			</>,
		),
	},
];

function About() {
	return (
		<section id="about" className="section about">
			<div className="container">
				<p className="section-label">01. About</p>
				<h2>A bit about me</h2>

				<div className="about-grid">
					<div className="about-text">
						<p className="about-lead">
							I'm in my <strong>final year at Webbutvecklare.net</strong> and currently doing my first
							internship at <strong>Netic AB</strong>.
						</p>
						<p>
							There I'm building Scan2ERP, a web app that reads barcodes with the phone camera and fetches
							customer orders straight from the ERP system. It's the first time I'm building a real
							prototype that may be used by real customers, so I'm learning a lot about how to build a web app that is both 
							<strong> robust</strong> and <strong>user-friendly</strong>.
						</p>
						<p>
							Outside of coding I enjoy gaming, martial arts, scuba diving and working on my Ford Mustang -69.
						</p>
					</div>

					<aside className="about-facts" aria-label="Quick facts">
						{FACTS.map((fact) => (
							<div key={fact.label} className="about-fact">
								<span className="about-fact-label">{fact.label}</span>
								<span className="about-fact-value">{fact.value}</span>
								<span className="about-fact-detail">{fact.detail}</span>
							</div>
						))}
					</aside>
				</div>

				<h3 className="about-subheading">When I'm not coding</h3>
				<ul className="about-interests">
					{INTERESTS.map((interest) => (
						<li key={interest.title} className="about-interest">
							<span className="about-interest-icon">{interest.icon}</span>
							<h4>{interest.title}</h4>
							<p>{interest.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default About;
