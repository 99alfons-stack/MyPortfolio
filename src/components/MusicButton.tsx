// ===== [Claude] Hela filen är skriven av Claude =====
// Liten knapp nere i hörnet. Ett klick öppnar en ruta med mina tre favoritband,
// ett nytt klick (eller Esc, eller ett klick utanför rutan) stänger den.
import { useEffect, useRef, useState } from "react";
import "../styles/MusicButton.css";

interface Band {
	name: string;
	genre: string;
	
}

// Lägg till, ta bort eller byt ordning på banden här.
const BANDS: Band[] = [
	{ name: "Red Hot Chili Peppers", genre: "Funk rock" },
	{ name: "Alice in Chains", genre: "Grunge" },
	{ name: "Yello", genre: "Electronic" },
];

function MusicButton() {
	const [isOpen, setIsOpen] = useState(false);
	// Ref till hela komponenten, så att vi kan se om ett klick hamnade utanför den.
	const wrapperRef = useRef<HTMLDivElement>(null);

	// Stäng rutan med Esc eller vid klick utanför. Lyssnarna läggs bara till när rutan är öppen,
	// och tas bort igen i return-funktionen (städning) när den stängs.
	useEffect(() => {
		if (!isOpen) return;

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") setIsOpen(false);
		}
		function onClick(event: MouseEvent) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("mousedown", onClick);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("mousedown", onClick);
		};
	}, [isOpen]);

	return (
		<div className="music" ref={wrapperRef}>
			{isOpen && (
				<div id="favorite-bands" className="music-panel" role="dialog" aria-label="My favourite bands">
					<p className="music-panel-label">Favourite bands</p>
					<ol className="music-list">
						{BANDS.map((band, index) => (
							<li key={band.name}>
								<span className="music-rank">{index + 1}</span>
								<span>
									<span className="music-band">{band.name}</span>
									<span className="music-meta">
										{band.genre} · {band.origin}
									</span>
								</span>
							</li>
						))}
					</ol>
				</div>
			)}

			<button
				type="button"
				className={`music-button${isOpen ? " is-open" : ""}`}
				onClick={() => setIsOpen((open) => !open)}
				aria-expanded={isOpen}
				aria-controls="favorite-bands"
				aria-label={isOpen ? "Close favourite bands" : "Show my favourite bands"}
				title="My favourite bands"
			>
				{isOpen ? (
					// Kryss-ikon
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path d="M6 6l12 12M18 6 6 18" className="music-stroke" />
					</svg>
				) : (
					// Not-ikon
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path d="M9 18V6l11-2v12" className="music-stroke" />
						<circle cx="6.5" cy="18" r="2.5" />
						<circle cx="17.5" cy="16" r="2.5" />
					</svg>
				)}
			</button>
		</div>
	);
}

export default MusicButton;
