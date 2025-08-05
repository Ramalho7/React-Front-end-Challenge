import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 Sistema react restcountries</p>
            <a
                href="https://github.com/Ramalho7/Login-System-React"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/lucasadramalho"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} className="linkedinIcon" />
            </a>
        </footer>
    )
}

export default Footer;
