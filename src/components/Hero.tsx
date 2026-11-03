import "../styles/Hero.css";
// Vite gör om importen till bildens adress. Byt filen i src/assets/ för att byta bild.
import profileImage from "../assets/profile.png";

// Tekniker som visas som små etiketter under texten.
const STACK = ["React", "TypeScript", "Node.js", "Vite", "Git"];

function Hero() {
	return (
		<section id="hem" className="hero">
			{/* Dekorativ bakgrund: rutnät och färgade ljusfläckar */}
			<div className="hero-grid" aria-hidden="true" />
			<div className="hero-glow hero-glow-1" aria-hidden="true" />
			<div className="hero-glow hero-glow-2" aria-hidden="true" />

			<div className="hero-inner container">
				<div className="hero-text">
					<p className="hero-eyebrow">
						<span className="hero-eyebrow-dot" aria-hidden="true" />
						LIA hos Netic AB
					</p>

					<h1 className="hero-title">
						Hej, jag är <span className="text-gradient">Alfons</span>
					</h1>

					<p className="hero-role">Utvecklare som bygger webbappar som löser riktiga problem.</p>

					{/* TEXT ATT BYTA: skriv några meningar om dig själv */}
					<p className="hero-lead">
						Jag bygger moderna webbapplikationer med React, TypeScript och Node.js. Just nu utvecklar
						jag Scan2ERP, en app som läser streckkoder och QR-koder med mobilkameran och hämtar
						kundordrar direkt från affärssystemet.
					</p>

					<div className="hero-actions">
						<a href="#projekt" className="btn btn-primary">
							Se mina projekt
							<svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M5 12h14M13 6l6 6-6 6" />
							</svg>
						</a>
						<a href="#kontakt" className="btn btn-ghost">
							Kontakta mig
						</a>
					</div>

					<ul className="hero-stack" aria-label="Tekniker jag arbetar med">
						{STACK.map((tech) => (
							<li key={tech}>{tech}</li>
						))}
					</ul>
				</div>

				<div className="hero-visual">
					<div className="hero-photo-ring">
						<div className="hero-photo">
							<img src={profileImage} alt="Porträtt av Alfons" width="460" height="460" />

						</div>
					</div>

					{/* Liten "kod"-bricka som svävar vid bilden */}
					<div className="hero-badge" aria-hidden="true">
						<span className="hero-badge-dot" />
						<code>
							<span className="code-key">building</span>: <span className="code-string">"Scan2ERP"</span>
						</code>
					</div>
				</div>
			</div>

			<a href="#om-mig" className="hero-scroll" aria-label="Scrolla till Om mig">
				<span />
			</a>
		</section>
	);
}

export default Hero;
