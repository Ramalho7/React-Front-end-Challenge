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
import Pagination from './components/Pagination';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ keyToSort: "name", direction: "asc" });
  const [favorites, setFavorites] = useState([])
  const [isTableView, setIsTableView] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [favoritesCurrentPage, setFavoritesCurrentPage] = useState(1);
  const [favoritesItensPerPage, setFavoritesItensPerPage] = useState(5);

  const filteredCountries = countries.filter(country => {
    if (!search) return true;
    const query = search.toLocaleLowerCase();
    const name = country?.name?.common?.toLowerCase() ?? "";
    return name.includes(query)
  })

  const filteredFavCountries = favorites.filter(country => {
    if (!search) return true;
    const query = search.toLocaleLowerCase();
    const name = country?.name?.common?.toLowerCase() ?? "";
    return name.includes(query)
  })

  const lastItemIndex = currentPage * itensPerPage;
  const firstItemIndex = lastItemIndex - itensPerPage;

  const currentItem = filteredCountries.slice(firstItemIndex, lastItemIndex)

  const favLastItemIndex = favoritesCurrentPage * favoritesItensPerPage;
  const favFirstItemIndex = favLastItemIndex - favoritesItensPerPage;

  const favoritesToShow = filteredFavCountries.slice(favFirstItemIndex, favLastItemIndex)

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

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const toggleView = () => {
    setIsTableView(!isTableView);
  }

  return (
    <div className="App">

      <IntroModel showModal={showModal} setShowModal={setShowModal} />
      <Header />
      <TypeWriter modalClosed={!showModal} />
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
            countries={currentItem}
            loading={loading}
            search={search}
            sort={sort}
            setSort={setSort}
          />
          <Pagination
            totalItens={countries.length}
            itensPerPage={itensPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
          <div id="favorites-section">
            <Favorites
              favorites={favorites}
              favoritesToShow={favoritesToShow}
              search={search}
              sort={sort}
              setSort={setSort}
              setFavorites={setFavorites} />
            <Pagination
              totalItens={favorites.length}
              itensPerPage={favoritesItensPerPage}
              currentPage={favoritesCurrentPage}
              setCurrentPage={setFavoritesCurrentPage} />
          </div>
          {/* react frament */} </>
      ) : (
        <>
          <CountryCard
            countries={currentItem}
            loading={loading}
            favorites={favorites}
            search={search}
            sort={sort}
            setSort={setSort}
            setFavorites={setFavorites}
          />
          <Pagination
            totalItens={countries.length}
            itensPerPage={itensPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
          <div id="favorites-section">
            <FavoritesCard
              favorites={favorites}
              favoritesToShow={favoritesToShow}
              search={search}
              sort={sort}
              setSort={setSort}
              setFavorites={setFavorites}
            />
            <Pagination
              totalItens={favorites.length}
              favoritesToShow={favoritesToShow}
              itensPerPage={favoritesItensPerPage}
              currentPage={favoritesCurrentPage}
              setCurrentPage={setFavoritesCurrentPage} />
          </div>
        </>
      )}
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App