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
	{ label: "Utbildning", value: "Webbutvecklare.net", detail: "Sista året" },
	{ label: "LIA", value: "Netic AB", detail: "Min första LIA" },
	{ label: "Bygger just nu", value: "Scan2ERP", detail: "React · TypeScript · Node.js" },
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
		title: "Spel",
		text: "Minecraft, Age of Empires-serien och roliga simulatorspel som går att köra co-op med vänner och familj.",
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
		title: "Kampsport",
		text: "Tränar sportjujutsu och brasiliansk jiujitsu. Bra för både kropp och huvud.",
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
		text: "Köpte den 2019 och har totalrenoverat motorn och fått igång den med hjälp av dokumentation och YouTube. Felsökning, fast med skiftnyckel.",
		icon: svg(
			<>
				<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
			</>,
		),
	},
];

function About() {
	return (
		<section id="om-mig" className="section about">
			<div className="container">
				<p className="section-label">01. Om mig</p>
				<h2>Lite om mig</h2>

				<div className="about-grid">
					<div className="about-text">
						<p className="about-lead">
							Jag går mitt <strong>sista år på Webbutvecklare.net</strong> och gör just nu min första
							LIA hos <strong>Netic AB</strong>.
						</p>
						<p>
							Där bygger jag Scan2ERP, en webbapp som läser streckkoder med mobilkameran och hämtar
							kundordrar direkt från affärssystemet. Det är första gången jag bygger något som riktiga
							användare ska jobba i varje dag, och det är precis det jag tycker är roligast: att lösa
							verkliga problem med kod.
						</p>
						<p>
							Utöver kodningen gillar jag spel, kampsport och att meka med min veteranbil.
						</p>
					</div>

					<aside className="about-facts" aria-label="Snabbfakta">
						{FACTS.map((fact) => (
							<div key={fact.label} className="about-fact">
								<span className="about-fact-label">{fact.label}</span>
								<span className="about-fact-value">{fact.value}</span>
								<span className="about-fact-detail">{fact.detail}</span>
							</div>
						))}
					</aside>
				</div>

				<h3 className="about-subheading">När jag inte kodar</h3>
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
