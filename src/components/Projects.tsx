import "../styles/Projects.css";

interface Project {
	title: string;
	subtitle: string;
	status: string; // t.ex. "Pågående"
	description: string;
	highlights: string[]; // det viktigaste du gjort, en rad per punkt
	tech: string[];
	// [Claude] Ändrat från "githubUrl: string" till valfri (?), eftersom betongsidan inte har något repo än.
	githubUrl?: string; // valfri: utan länk visas ingen GitHub-knapp
	// [Claude] Lagt till "concrete" för betongsidans bild.
	visual: "scan" | "portfolio" | "concrete"; // vilken illustration kortet visar
}

// Lägg till nya projekt överst i listan.
const PROJECTS: Project[] = [
	{
		title: "Scan2ERP",
		subtitle: "Internship project at Netic AB",
		status: "In progress",
		description:
			"Mobile-friendly web app that reads barcodes, QR codes and text with the camera and fetches customer orders straight from the Monitor ERP system.",
		highlights: [
			"Scans EAN-13, EAN-8, Code 128 and QR codes with a phone or desktop camera",
			"Node.js backend that keeps the Monitor credentials off the client",
			"ERP adapter layer, so systems like Fortnox can be added",
			"Text recognition (OCR) of order numbers with Tesseract.js, in progress",
		],
		tech: ["React", "TypeScript", "Node.js", "Vite", "Monitor API"],
		githubUrl: "https://github.com/99alfons-stack/EAN-Netic",
		visual: "scan",
	},
	// ===== [Claude] START: nytt projekt – sidan för föräldrarnas betongfigurer och sällskapsspel =====
	// Ändra gärna titel och text. tech är en gissning (samma som portfolion) – justera efter vad du faktiskt använder.
	// Lägg till githubUrl: "https://github.com/..." när repot finns, så visas GitHub-knappen.
	// [Claude] Flyttad under Scan2ERP så att LIA-projektet visas först.
	{
		title: "Concrete shop",
		subtitle: "Website for my parents' business",
		status: "In progress",
		description:
			"Website for my parents, who make and sell handcrafted concrete figurines and board games. The site shows off their products and makes it easy for customers to get in touch.",
		highlights: [
			"Product pages for figurines and board games",
			"Built for real users and a real small business",
			"Responsive design that works on phone and desktop",
		],
		tech: ["React", "TypeScript", "Vite", "CSS"],
		visual: "concrete",
	},
	// ===== [Claude] SLUT: nytt projekt =====
	{
		title: "My portfolio",
		subtitle: "This site",
		status: "In progress",
		description:
			"Personal portfolio built from scratch to show my projects and skills. Dark design, responsive and no UI library.",
		highlights: [
			"Sticky menu that highlights the section you are on",
			"Skill bars that fill up when they scroll into view",
			"Responsive layout with hand-written CSS, no framework",
		],
		tech: ["React", "TypeScript", "Vite", "CSS"],
		githubUrl: "https://github.com/99alfons-stack/MyPortfolio",
		visual: "portfolio",
	},
];

// Dekorativ bild överst i kortet, ritad med SVG.
function ProjectVisual({ type }: { type: Project["visual"] }) {
	if (type === "scan") {
		return (
			<svg viewBox="0 0 320 160" aria-hidden="true">
				{/* Sikte */}
				<path d="M110 40h-14v14M210 40h14v14M110 120h-14v-14M210 120h14v-14" className="pv-stroke" />
				{/* Streckkod */}
				{[0, 6, 10, 18, 22, 30, 36, 40, 48, 52, 60, 66, 72, 78, 84, 90].map((x, i) => (
					<rect key={x} x={120 + x} y="56" width={i % 3 === 0 ? 4 : 2} height="48" className="pv-fill" />
				))}
				{/* Skanningslinje */}
				<line x1="100" y1="80" x2="220" y2="80" className="pv-scanline" />
			</svg>
		);
	}

	// ===== [Claude] START: bild för betongsidan – ett spelbräde med pjäser och en figur =====
	if (type === "concrete") {
		return (
			<svg viewBox="0 0 320 160" aria-hidden="true">
				{/* Spelbräde 3x3 */}
				<rect x="64" y="34" width="96" height="96" rx="8" className="pv-stroke" />
				<path d="M96 34v96M128 34v96M64 66h96M64 98h96" className="pv-stroke" />
				<circle cx="80" cy="50" r="8" className="pv-accent" />
				<circle cx="144" cy="82" r="8" className="pv-accent" />
				<circle cx="112" cy="114" r="8" className="pv-muted" />
				{/* Spelpjäs/figur */}
				<circle cx="222" cy="58" r="14" className="pv-fill" />
				<path d="M210 76h24l8 40h-40z" className="pv-fill" />
				<rect x="194" y="116" width="56" height="12" rx="4" className="pv-fill" />
			</svg>
		);
	}
	// ===== [Claude] SLUT: bild för betongsidan =====

	return (
		<svg viewBox="0 0 320 160" aria-hidden="true">
			{/* Ett litet webbläsarfönster */}
			<rect x="70" y="28" width="180" height="104" rx="10" className="pv-stroke" />
			<line x1="70" y1="46" x2="250" y2="46" className="pv-stroke" />
			<circle cx="82" cy="37" r="3" className="pv-fill" />
			<circle cx="92" cy="37" r="3" className="pv-fill" />
			<circle cx="102" cy="37" r="3" className="pv-fill" />
			<circle cx="104" cy="82" r="18" className="pv-accent" />
			<rect x="134" y="66" width="90" height="10" rx="5" className="pv-fill" />
			<rect x="134" y="84" width="64" height="8" rx="4" className="pv-muted" />
			<rect x="86" y="110" width="44" height="10" rx="5" className="pv-accent" />
			<rect x="136" y="110" width="44" height="10" rx="5" className="pv-muted" />
		</svg>
	);
}

function Projects() {
	return (
		<section id="projects" className="section projects">
			<div className="container">
				<p className="section-label">02. Projects</p>
				<h2>What I'm building</h2>
				<p className="projects-lead">Projects I'm working on right now.</p>

				<div className="projects-grid">
					{PROJECTS.map((project) => (
						<article key={project.title} className="project-card">
							<div className={`project-visual project-visual-${project.visual}`}>
								<ProjectVisual type={project.visual} />
								<span className="project-status">
									<span className="project-status-dot" aria-hidden="true" />
									{project.status}
								</span>
							</div>

							<div className="project-body">
								<p className="project-subtitle">{project.subtitle}</p>
								<h3>{project.title}</h3>
								<p className="project-description">{project.description}</p>

								<ul className="project-highlights">
									{project.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>

								<ul className="project-tech" aria-label="Technologies">
									{project.tech.map((tech) => (
										<li key={tech}>{tech}</li>
									))}
								</ul>

								{/* [Claude] Länken visas bara om projektet har en githubUrl. */}
								{project.githubUrl && (
									<a href={project.githubUrl} className="project-link" target="_blank" rel="noreferrer">
										View the code on GitHub
										<svg viewBox="0 0 24 24" aria-hidden="true">
											<path d="M7 17 17 7M9 7h8v8" />
										</svg>
									</a>
								)}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
