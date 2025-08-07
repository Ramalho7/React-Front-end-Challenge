import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 Sistema react restcountries</p>
            <a
                href="https://github.com/Ramalho7/Login-System-React"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} className="githubIcon"/>
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
