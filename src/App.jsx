import { useState, useEffect } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import TypeWriter from './components/TypeWriter';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SortControl from './components/SortControl';
import Favorites from './components/Favorites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faTh, faList } from '@fortawesome/free-solid-svg-icons';
import FavoritesCard from './components/FavoritesCard';
import CountryCard from './components/CountryCard';
import DarkTheme from './components/DarkTheme';
import IntroModel from './components/IntroModel';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ keyToSort: "name", direction: "asc" });
  const [favorites, setFavorites] = useState([])
  const [isTableView, setIsTableView] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,population"
    ).then((response) => response.json()).then((data) => {
      setCountries(data)
      setLoading(false)
      console.log(data)
    }).catch((error) => {
      console.error("Error ao buscar países", error);
      setLoading(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleView = () => {
    setIsTableView(!isTableView);
  }

  return (
    <div className="App" style={{ position: "relative" }}>

      <IntroModel />
      <Header />
      <TypeWriter />
      <div className="search-sort-container">
        <div className="search-sort">
          <div className="search">
            <SearchBar onSearch={setSearch} />
          </div>
          <div className="sort-util-buttons">
            <SortControl sort={sort} setSort={setSort} />
            <button className="btn-go-to-favorites" onClick={() => document.getElementById("favorites-section").scrollIntoView({ behavior: "smooth" })}>
              <span>Favoritos</span>
              <div className="icon-go-to-favorites">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </button>
            <button onClick={toggleView} className='btn-toggle-view'>
              {isTableView ? <FontAwesomeIcon icon={faTh} /> : <FontAwesomeIcon icon={faList} />}
            </button>
            <DarkTheme isDark={isDark} setIsDark={setIsDark} />
          </div>
        </div>
      </div>
      {isTableView ? (
        <> {/* react frament */}
          <CountryList
            countries={countries}
            loading={loading}
            search={search}
            sort={sort}
            setSort={setSort}
          />
          <div id="favorites-section">
            <Favorites
              favorites={favorites}
              search={search}
              sort={sort}
              setSort={setSort}
              setFavorites={setFavorites}
            />
          </div>
          {/* react frament */} </>
      ) : (
        <>
          <CountryCard
            countries={countries}
            loading={loading}
            favorites={favorites}
            search={search}
            sort={sort}
            setSort={setSort}
            setFavorites={setFavorites}
          />
          <div id="favorites-section">
            <FavoritesCard
              favorites={favorites}
              search={search}
              sort={sort}
              setSort={setSort}
              setFavorites={setFavorites}
            />
          </div>
        </>
      )}
      <ScrollToTop/>
      <Footer />
    </div>
  )
}

export default App