import { useState, useEffect } from 'react'
import './App.css'
import CountryList from './components/CountryList'
import TypeWriter from './components/TypeWriter';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SortControl from './components/SortControl';
import Favorites from './components/Favorites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';
import CountryCard from './components/CountryCard';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ keyToSort: "name", direction: "asc" });
  const [favorites, setFavorites] = useState([])
  const [isTableView, setIsTableView] = useState(true);

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
    <div>
      <Header />
      <TypeWriter />
      <div className="search-sort-container">
        <div className="search-sort">
          <SearchBar onSearch={setSearch} />
          <SortControl sort={sort} setSort={setSort} />
          <button className="btn-go-to-favorites" onClick={() => document.getElementById("favorites-section").scrollIntoView({ behavior: "smooth" })}>
            <span>Favoritos</span>
            <div className="icon-go-to-favorites">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </button>
          <button onClick={toggleView} className='btn-toggle-view'>
            {isTableView ? "Exibir como cards" : "Exibir como tabela"}
          </button>
        </div>
      </div>
      {isTableView ? (
        <CountryList
          countries={countries}
          loading={loading}
          search={search}
          sort={sort}
          setSort={setSort}
          favorites={favorites}
          setFavorites={setFavorites} />
      ) : (
        <CountryCard
          countries={countries}
          loading={loading}
          favorites={favorites}
          search={search}
          sort={sort}
          setSort={setSort}
          setFavorites={setFavorites}
        />
      )
      }

      <div id="favorites-section">
        <Favorites favorites={favorites}
          sort={sort}
          setSort={setSort} />
      </div>
      <Footer />
      <button id="btn-go-to-top" className="btn-go-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  )
}

export default App