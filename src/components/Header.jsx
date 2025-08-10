import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHeart, faList, faInfoCircle, faCode, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="brand">
                    <p> <FontAwesomeIcon icon={faCode} /> Home</p>
                </div>
                <ul className="menu-links">
                    <li>Paises</li>
                    <li>Favoritos</li>
                    <li>Sobre</li>
                </ul>
                <button className="contact-button">Contact</button>
                <button className="menu-toggle" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className={`dropdown-menu ${open ? "open" : ""}`}>
                    <ul>
                        <li>Paises</li>
                        <li>Favoritos</li>
                        <li>Sobre</li>
                        <li><button className="contact-button">Contact</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;