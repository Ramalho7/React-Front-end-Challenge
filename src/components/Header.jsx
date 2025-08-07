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
                <button className="menu-toggle" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className={`dropdown-menu ${open ? "open" : ""}`}>
                    <div className="center-menu-itens">
                        <p><FontAwesomeIcon icon={faGlobe} /> Countries</p>
                        <p><FontAwesomeIcon icon={faHeart} /> Favorites</p>
                        <p><FontAwesomeIcon icon={faList} /> Country List</p>
                    </div>
                    <div className="end-menu-itens">
                        <p><FontAwesomeIcon icon={faInfoCircle} /> Sobre</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;