import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		document.title = `Contact | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							How to get in touch with me?
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for expressing your interest
							in reaching out to me. I greatly appreciate
							your feedback, inquiries, and suggestions.
							If you have any specific questions or comments,
							please don't hesitate to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I try my best to respond to all messages
							within a day, but it might take a bit longer
							during busy times. If you prefer connecting on
							social media, you can find me on
							&nbsp;{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Looking forward to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
