import React from "react";
import "./Favorites.css";
import CountryList from "./CountryList";

const Favorites = ({ favorites, sort, setSort, setFavorites }) => {

    const filteredFavorites = favorites;

    return (
        <div className="favorites-container">
            <h2>Países favoritados</h2>
            {filteredFavorites.length === 0 ? (
                <p>Nenhum país foi favoritado ainda.</p>
            ) : (
                <CountryList
                    countries={filteredFavorites}
                    loading={false}
                    search=""
                    sort={sort }
                    setSort={setSort}
                    favorites={favorites}
                    setFavorites={setFavorites}
                />
            )}
        </div>
    );
};

export default Favorites;