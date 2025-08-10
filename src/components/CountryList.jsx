import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Spinner from "./Spinner";

const CountryList = ({ countries, loading, search, sort, setSort}) => {

    const headers = [
        { key: "flags", label: "Bandeira" },
        { key: "name", label: "Nome" },
        { key: "region", label: "Região" },
        { key: "population", label: "População" },
    ];

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
                                <span>{header.label}</span>
                                {sort.keyToSort === header.key && (
                                    <FontAwesomeIcon icon={sort.direction === "asc" ? faCaretUp : faCaretDown} />
                                )}

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
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default CountryList;