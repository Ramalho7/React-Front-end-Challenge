import React from "react";
import Spinner from "./Spinner";

const CountryList = ({countries, loading, search}) => {
    if (loading) return <Spinner/>

    return (
        <div className="table-container-countries">
            <table>
                <thead>
                    <tr>
                        <th>
                            Bandeira
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Região
                        </th>
                        <th>
                            População
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {countries.filter((country) => {
                        return search.toLowerCase() === '' ? country : country.name.common.toLowerCase().includes(search.toLowerCase())
                    }).map((country, index) => (
                        <tr key={country.name.common} className="fade-in-country-list">
                            <td>
                                <img src={country.flags.png}
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
    )
}

export default CountryList;