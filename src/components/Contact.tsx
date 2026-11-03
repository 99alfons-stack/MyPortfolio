import "../styles/Contact.css";

// Kontaktuppgifterna som visas på sidan.
const CONTACT = {
	email: "99alfons@gmail.com",
	githubUrl: "https://github.com/99alfons-stack",
	githubText: "github.com/99alfons-stack",
	instagramUrl: "https://www.instagram.com/alfons_bengtsson",
	instagramText: "@alfons_bengtsson",
	location: "Sverige", // TODO: din ort, t.ex. "Jönköping"
};

function Contact() {
	return (
		<section id="kontakt" className="section contact">
			<div className="container">
				<div className="contact-panel">
					<div className="contact-intro">
						<p className="section-label">04. Kontakt</p>
						<h2>Låt oss höras</h2>
						<p className="contact-lead">
							Letar du efter en utvecklare, har en fråga om mina projekt eller vill bara säga hej?
							Skicka ett mejl så svarar jag så snart jag kan.
						</p>
						<a href={`mailto:${CONTACT.email}`} className="btn btn-primary contact-cta">
							Skicka ett mejl
							<svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M5 12h14M13 6l6 6-6 6" />
							</svg>
						</a>
					</div>

					<ul className="contact-list">
						<li>
							<a href={`mailto:${CONTACT.email}`} className="contact-item">
								<span className="contact-icon" aria-hidden="true">
									<svg viewBox="0 0 24 24">
										<rect x="3" y="5" width="18" height="14" rx="2" />
										<path d="m3 7 9 6 9-6" />
									</svg>
								</span>
								<span>
									<span className="contact-item-label">E-post</span>
									<span className="contact-item-value">{CONTACT.email}</span>
								</span>
							</a>
						</li>
						<li>
							<a href={CONTACT.githubUrl} className="contact-item" target="_blank" rel="noreferrer">
								<span className="contact-icon" aria-hidden="true">
									<svg viewBox="0 0 24 24">
										<path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.4 11.4 0 0 0-6 0C6.7 2.5 5.7 2.8 5.7 2.8a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.3 9.2c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21" />
									</svg>
								</span>
								<span>
									<span className="contact-item-label">GitHub</span>
									<span className="contact-item-value">{CONTACT.githubText}</span>
								</span>
							</a>
						</li>
						<li>
							<a href={CONTACT.instagramUrl} className="contact-item" target="_blank" rel="noreferrer">
								<span className="contact-icon" aria-hidden="true">
									<svg viewBox="0 0 24 24">
										<rect x="3" y="3" width="18" height="18" rx="5" />
										<circle cx="12" cy="12" r="4" />
										<path d="M17.5 6.5h.01" />
									</svg>
								</span>
								<span>
									<span className="contact-item-label">Instagram</span>
									<span className="contact-item-value">{CONTACT.instagramText}</span>
								</span>
							</a>
						</li>
						<li>
							<div className="contact-item">
								<span className="contact-icon" aria-hidden="true">
									<svg viewBox="0 0 24 24">
										<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
										<circle cx="12" cy="10" r="2.5" />
									</svg>
								</span>
								<span>
									<span className="contact-item-label">Ort</span>
									<span className="contact-item-value">{CONTACT.location}</span>
								</span>
							</div>
						</li>
					</ul>
				</div>

				<footer className="footer">
					<span>© {new Date().getFullYear()} Alfons</span>
					<span>Byggd med React och TypeScript</span>
				</footer>
			</div>
		</section>
	);
}

export default Contact;
