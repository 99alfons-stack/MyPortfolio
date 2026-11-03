import Contact from "./components/Contact.tsx";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";

// Sektioner som ännu inte är byggda. Platshållare tills de blir egna komponenter.
const PLACEHOLDER_SECTIONS = [{ id: "om-mig", label: "01. Om mig", title: "Om mig" }];

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />

				{PLACEHOLDER_SECTIONS.map((section) => (
					<section key={section.id} id={section.id} className="section">
						<div className="container">
							<p className="section-label">{section.label}</p>
							<h2>{section.title}</h2>
							<p className="section-placeholder">Kommer snart.</p>
						</div>
					</section>
				))}

				<Projects />
				<Skills />
				<Contact />
			</main>
		</>
	);
}

export default App;
