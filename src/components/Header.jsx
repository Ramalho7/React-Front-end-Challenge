import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHeart, faList, faInfoCircle, faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="brand">
                    <Link to="/"> <FontAwesomeIcon icon={faCode} /> Home</Link>
                </div>
                <div className="center-menu-itens">
                    <p><FontAwesomeIcon icon={faGlobe} /> Countries</p>
                    <p><FontAwesomeIcon icon={faHeart} /> Favorites</p>
                    <Link to="countrylist"><FontAwesomeIcon icon={faList} /> Country List</Link>
                </div>
                <div className="end-menu-itens">
                    <p><FontAwesomeIcon icon={faInfoCircle} /> Sobre</p>
                </div>
            </nav>
        </header>
    )
}

export default Header;