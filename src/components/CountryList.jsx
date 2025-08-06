import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import Spinner from "./Spinner";

const CountryList = ({ countries, loading, search, sort, setSort, favorites, setFavorites }) => {

    const headers = [
        { key: "flags", label: "Bandeira" },
        { key: "name", label: "Nome" },
        { key: "region", label: "Região" },
        { key: "population", label: "População" },
        { key: "favorite", label: "Favoritos" }
    ];

    const toggleFavorite = (country) => {
        if (favorites.some(fav => fav.name.common === country.name.common))
            setFavorites(favorites.filter(fav => fav.name.common != country.name.common))
        else {
            setFavorites([...favorites, country])
        }
    }

    function handleHeaderClick(header) {
        setSort({
            keyToSort: header.key,
            direction: header.key === sort.keyToSort ? (sort.direction === "asc" ? "desc" : "asc") : "asc",
        });
        console.log(`Header clicked: ${header.key}`);
    }


    function getSortedArray(arrayToSort) {
        if (sort.direction === "asc") {
            return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1))
        }
        return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1))
    }

    if (loading) return <Spinner />;

    return (
        <div className="table-container-countries">
            <table>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} onClick={() => handleHeaderClick(header)}>
                                <span>
                                    {header.label}
                                    {sort.keyToSort === header.key && (
                                        <FontAwesomeIcon icon={sort.direction === "asc" ? faCaretUp : faCaretDown} />
                                    )}
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {getSortedArray(countries)
                        .filter((country) => {
                            return search.toLowerCase() === ''
                                ? country
                                : country.name.common.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((country, index) => (
                            <tr key={country.name.common} className="fade-in-country-list">
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
                                <td>
                                    <button onClick={() => toggleFavorite(country)}>
                                        <FontAwesomeIcon
                                            icon={favorites.some(fav => fav.name.common === country.name.common) ? faStar : faStarRegular}
                                            style={{ color: favorites.some(fav => fav.name.common === country.name.common) ? "gold" : "gray" }}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default CountryList;