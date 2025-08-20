import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./CountryList.css"

import Spinner from "./Spinner";

const CountryList = ({ countries, loading, search, sort, setSort, showFavoriteButton = false, favorites = [], setFavorites }) => {

    const toggleFavorite = (country) => {
        if (favorites.some((fav) => fav.name.common === country.name.common)) {
            setFavorites(favorites.filter((fav) => fav.name.common !== country.name.common));
        } else {
            setFavorites([...favorites, country]);
        }
    };

    const headers = [
        { key: "flags.png", label: "Bandeira" },
        { key: "name", label: "Nome" },
        { key: "region", label: "Região" },
        { key: "population", label: "População" },
    ];

    if (loading) return <Spinner />;

    return (
        <div className="table-container-countries">
            <table>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} onClick={() => handleHeaderClick(header)}>
                                <span>{header.label}</span>
                                {sort.keyToSort === header.key && (
                                    <FontAwesomeIcon icon={sort.direction === "asc" ? faCaretUp : faCaretDown} />
                                )}
                            </th>
                        ))}
                        {showFavoriteButton && <th>Favoritar</th>}
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country, index) => (
                        <tr key={country.name.common}>
                            <td>
                                <img
                                    src={country.flags.png}
                                    alt={country.name.common}
                                    width={80}
                                    height={80}
                                />
                            </td>
                            <td>{country.name.common}</td>
                            <td>{country.region}</td>
                            <td>{country.population.toLocaleString()}</td>
                            {showFavoriteButton && (
                                <td className="country-list-favorite">
                                    <button onClick={() => toggleFavorite(country)}>
                                        <span className="button-text">
                                            {favorites.some((fav) => fav.name.common === country.name.common) ? "Favoritado" : "Favoritar"}
                                        </span>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="heart-icon"
                                            style={{
                                                color: favorites.some((fav) => fav.name.common === country.name.common)
                                                    ? "#e63946"
                                                    : "#aaa",
                                            }}
                                        />
                                    </button>
                                </td>
                            )
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CountryList;