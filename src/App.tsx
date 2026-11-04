import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Hero from "./components/Hero.tsx";
import MusicButton from "./components/MusicButton.tsx"; // [Claude] knappen som visar mina favoritband
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
			{/* [Claude] Utanför <main> eftersom den ligger fast i hörnet och inte hör till någon sektion */}
			<MusicButton />
		</>
	);
}

export default App;
