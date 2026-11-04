import "../styles/Hero.css";
// Vite gör om importen till bildens adress. Byt filen i src/assets/ för att byta bild.
import profileImage from "../assets/profile.png";

// Tekniker som visas som små etiketter under texten.
const STACK = ["React", "TypeScript", "Node.js", "Vite", "Git"];

function Hero() {
	return (
		<section id="home" className="hero">
			{/* Dekorativ bakgrund: rutnät och färgade ljusfläckar */}
			<div className="hero-grid" aria-hidden="true" />
			<div className="hero-glow hero-glow-1" aria-hidden="true" />
			<div className="hero-glow hero-glow-2" aria-hidden="true" />

			<div className="hero-inner container">
				<div className="hero-text">
					<p className="hero-eyebrow">
						<span className="hero-eyebrow-dot" aria-hidden="true" />
						Student / Intern at Netic
					</p>

					<h1 className="hero-title">
						Hi, I'm <span className="text-gradient">Alfons</span>
					</h1>

					<p className="hero-role">Developer building web apps that solve real problems.</p>

					{/* TEXT ATT BYTA: skriv några meningar om dig själv */}
					<p className="hero-lead">
						I'm studying web development at Webbutvecklare.net and currently doing my internship at
						Netic, where I'm building Scan2ERP – a web app that scans barcodes and QR codes with the phone
						camera and fetches customer orders straight from the ERP system.
					</p>

					<div className="hero-actions">
						<a href="#projects" className="btn btn-primary">
							See my projects
							<svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M5 12h14M13 6l6 6-6 6" />
							</svg>
						</a>
						<a href="#contact" className="btn btn-ghost">
							Contact me
						</a>
					</div>

					<ul className="hero-stack" aria-label="Technologies I work with">
						{STACK.map((tech) => (
							<li key={tech}>{tech}</li>
						))}
					</ul>
				</div>

				<div className="hero-visual">
					<div className="hero-photo-ring">
						<div className="hero-photo">
							<img src={profileImage} alt="Portrait of Alfons" width="460" height="460" />

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

			<a href="#about" className="hero-scroll" aria-label="Scroll to About">
				<span />
			</a>
		</section>
	);
}

export default Hero;
