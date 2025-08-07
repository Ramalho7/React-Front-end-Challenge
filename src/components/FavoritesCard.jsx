import React from "react";
import "./FavoritesCard.css";
import CountryCard from "./CountryCard";

const FavoritesCard = ({ favorites, sort, setSort, setFavorites }) => { 
    const filteredFavorites = favorites;

    return (
        <div className="favorites-card-container">
            <h2>Países favoritados</h2>
            {filteredFavorites.length === 0 ? (
                <p>Nenhum país foi favoritado ainda.</p>
            ) : (
                <CountryCard
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

export default FavoritesCard;