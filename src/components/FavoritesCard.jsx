import React from "react";
import Spinner from "./Spinner";
import "./FavoritesCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CountryCard from "./CountryCard";

const FavoritesCard = ({ favorites, sort, setSort }) => {
    if (!favorites || favorites.length === 0) {
        return <p>Nenhum país foi favoritado ainda.</p>;
    }   

    const filteredFavorites = favorites;

    return (
        <div className="favorites-card-container">
            <h2>Países favoritados</h2>
            {filteredFavorites.lenght === 0 ? (
                <p>Nenhum país foi favoritado ainda.</p>
            ) : (
                <CountryCard
                    countries={filteredFavorites}
                    loading={false}
                    search=""
                    sort={sort }
                    setSort={setSort}
                    favorites={favorites}
                    setFavorites={() => { }}
                />
            )}
        </div>
    );
};

export default FavoritesCard;