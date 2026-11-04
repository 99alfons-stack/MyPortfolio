import { useEffect, useRef, useState } from "react";
import "../styles/Skills.css";

interface Skill {
	name: string;
	level: number; // 0 = kan inget, 100 = expert
}

interface SkillGroup {
	title: string;
	description: string;
	skills: Skill[];
}

// JUSTERA NIVÅERNA: 0 = tom stapel (kan inget), 100 = full stapel (expert).
// Var ärlig – en rekryterare frågar gärna om det du satt högst.
const SKILL_GROUPS: SkillGroup[] = [
	{
		title: "Frontend",
		description: "What the user sees and clicks on",
		skills: [
			{ name: "HTML & CSS", level: 40 },
			{ name: "JavaScript", level: 40 },
			{ name: "TypeScript", level: 40 },
			{ name: "React", level: 20 },
		],
	},
	{
		title: "Backend",
		description: "Servers, APIs and ERP systems",
		skills: [
			{ name: "Node.js", level: 20 },
			{ name: "REST APIs", level: 20 },
		],
	},
	{
		title: "Tools",
		description: "What I build and collaborate with",
		skills: [
			{ name: "Git & GitHub", level: 70 },
			{ name: "Vite", level: 20 },
			{ name: "Debugging in DevTools", level: 30 },
			{ name: "Claude", level: 50 },
		],
	},
];

// Text som beskriver nivån, visas bredvid procenten.
function levelText(level: number): string {
	if (level >= 85) return "Expert";
	if (level >= 65) return "Advanced";
	if (level >= 45) return "Good";
	if (level >= 25) return "Basic";
	if (level > 0) return "Beginner";
	return "Not started";
}

function Skills() {
	const gridRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false); // fyll staplarna först när de syns

	useEffect(() => {
		const grid = gridRef.current;
		if (!grid) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect(); // fyll bara en gång
				}
			},
			{ threshold: 0.2 },
		);

		observer.observe(grid);
		return () => observer.disconnect();
	}, []);

	return (
		<section id="skills" className="section skills">
			<div className="container">
				<p className="section-label">03. Skills</p>
				<h2>What I know</h2>
				<p className="skills-lead">
					The bars show how far I've come in each area, from 0 (not started) to 100 (expert).
				</p>

				{/* Förklaring av skalan */}
				<div className="skills-scale" aria-hidden="true">
					<span>0 · Beginner</span>
					<span>50 · Self-sufficient</span>
					<span>100 · Expert</span>
				</div>

				<div ref={gridRef} className={`skills-grid ${visible ? "is-visible" : ""}`}>
					{SKILL_GROUPS.map((group) => (
						<article key={group.title} className="skills-card">
							<h3>{group.title}</h3>
							<p className="skills-card-description">{group.description}</p>

							<ul className="skills-list">
								{group.skills.map((skill, index) => (
									<li key={skill.name} className="skill">
										<div className="skill-header">
											<span className="skill-name">{skill.name}</span>
											<span className="skill-level">
												{levelText(skill.level)} <strong>{skill.level}</strong>
											</span>
										</div>

										<div
											className="skill-track"
											role="meter"
											aria-label={skill.name}
											aria-valuemin={0}
											aria-valuemax={100}
											aria-valuenow={skill.level}
											aria-valuetext={`${skill.level} of 100, ${levelText(skill.level)}`}
										>
											<div
												className="skill-fill"
												style={{
													width: visible ? `${skill.level}%` : "0%",
													transitionDelay: `${index * 120}ms`, // staplarna fylls en i taget
												}}
											/>
										</div>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
