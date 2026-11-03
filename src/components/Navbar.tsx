import { useEffect, useState } from "react";
import "../styles/Navbar.css";

// Länkarna i menyn. id = sektionens id på sidan.
const LINKS = [
	{ id: "om-mig", label: "Om mig" },
	{ id: "projekt", label: "Projekt" },
	{ id: "kompetenser", label: "Kompetenser" },
	{ id: "kontakt", label: "Kontakt" },
];

const GITHUB_URL = "https://github.com/99alfons-stack";

function Navbar() {
	const [open, setOpen] = useState(false); // mobilmenyn öppen?
	const [scrolled, setScrolled] = useState(false); // har användaren scrollat ner?
	const [active, setActive] = useState(""); // sektionen som syns just nu

	// Ge menyn bakgrund när man scrollat bort från toppen.
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Markera länken för den sektion som är mitt på skärmen.
	useEffect(() => {
		const ids = ["hem", ...LINKS.map((link) => link.id)];
		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActive(entry.target.id === "hem" ? "" : entry.target.id);
					}
				}
			},
			// Räkna bara ett smalt band mitt på skärmen som "synligt".
			{ rootMargin: "-45% 0px -50% 0px" },
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	// Stäng mobilmenyn med Escape.
	useEffect(() => {
		if (!open) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<header className={`navbar ${scrolled || open ? "is-scrolled" : ""}`}>
			<nav className="navbar-inner container" aria-label="Huvudmeny">
				<a href="#hem" className="navbar-logo" onClick={() => setOpen(false)}>
					<span className="navbar-logo-mark" aria-hidden="true">
						A
					</span>
					<span className="navbar-logo-text">Alfons</span>
				</a>

				<ul id="navbar-links" className={`navbar-links ${open ? "is-open" : ""}`}>
					{LINKS.map((link) => (
						<li key={link.id}>
							<a
								href={`#${link.id}`}
								className={active === link.id ? "is-active" : undefined}
								aria-current={active === link.id ? "location" : undefined}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						</li>
					))}
					<li className="navbar-divider" aria-hidden="true" />
					<li>
						<a
							href={GITHUB_URL}
							className="navbar-github"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub (öppnas i ny flik)"
						>
							{/* GitHub-ikon */}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
							</svg>
							<span className="navbar-github-text">GitHub</span>
						</a>
					</li>
				</ul>

				{/* Hamburgerknapp, syns bara på mobil */}
				<button
					type="button"
					className={`navbar-toggle ${open ? "is-open" : ""}`}
					aria-expanded={open}
					aria-controls="navbar-links"
					aria-label={open ? "Stäng menyn" : "Öppna menyn"}
					onClick={() => setOpen((value) => !value)}
				>
					<span />
					<span />
					<span />
				</button>
			</nav>
		</header>
	);
}

export default Navbar;
