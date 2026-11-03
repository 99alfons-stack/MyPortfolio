import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Projects />
				<Skills />
				<Contact />
			</main>
		</>
	);
}

export default App;
