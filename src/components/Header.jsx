import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHeart, faList, faInfoCircle, faCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="brand">
                    <p> <FontAwesomeIcon icon={faCode} /> Home</p>
                </div>
                <div className="center-menu-itens">
                    <p><FontAwesomeIcon icon={faGlobe} /> Countries</p>
                    <p><FontAwesomeIcon icon={faHeart} /> Favorites</p>
                    <p><FontAwesomeIcon icon={faList} /> Country List</p>
                </div>
                <div className="end-menu-itens">
                    <p><FontAwesomeIcon icon={faInfoCircle} /> Sobre</p>
                </div>
            </nav>
        </header>
    )
}

export default Header;