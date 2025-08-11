import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <a
                href="https://github.com/Ramalho7/Login-System-React"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} className="githubIcon"/>
            </a>
        </footer>
    )
}

export default Footer;
