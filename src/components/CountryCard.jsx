import React from "react";
import Spinner from "./Spinner";
import "./CountryCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const CountryCard = ({ countries, loading, favorites, setFavorites, search, sort }) => {
    const toggleFavorite = (country) => {
        if (favorites.some((fav) => fav.name.common === country.name.common)) {
            setFavorites(favorites.filter((fav) => fav.name.common !== country.name.common));
        } else {
            setFavorites([...favorites, country]);
        }
    };

    function getSortedArray(arrayToSort) {
        if (sort.direction === "asc") {
            return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1));
        }
        return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1));
    }

    if (loading) return <Spinner />;

    return (
        <div className="card-container">
            {getSortedArray(countries).filter((country) => {
                return search.toLowerCase() === ''
                    ? country
                    : country.name.common.toLowerCase().includes(search.toLowerCase());
            }).map((country, index) => (
                <div key={country.name.common} className="country-card fade-in-country-card" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="icon-country-card-favorite">
                        <button onClick={() => toggleFavorite(country)}>
                            <FontAwesomeIcon
                                icon={favorites.some(fav => fav.name.common === country.name.common) ? faStar : faStarRegular}
                                style={{ color: favorites.some(fav => fav.name.common === country.name.common) ? "gold" : "gray" }}
                            />
                        </button>
                    </div>
                    <div className="country-card-img-section">
                        <img
                            src={country.flags.png}
                            alt={country.name.common}
                            className="country-flag"
                        />
                    </div>
                    <h3>{country.name.common}</h3>
                    <p>Região: {country.region}</p>
                    <p>População: {country.population.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default CountryCard;