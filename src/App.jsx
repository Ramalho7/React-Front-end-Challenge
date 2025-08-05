import { useState, useEffect } from 'react'
import './App.css'
import CountryList from './components/CountryList'
import TypeWriter from './components/TypeWriter';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SortControl from './components/SortControl';


function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ keyToSort: "name", direction: "asc" });

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

  return (
    <div>
      <Header />
      <TypeWriter />
      <div className="search-sort-container">
        <div className="search-sort">
          <SearchBar onSearch={setSearch} />
          <SortControl sort={sort} setSort={setSort} />
        </div>
      </div>
      <CountryList countries={countries} loading={loading} search={search} sort={sort} setSort={setSort} />
      <Footer />
    </div>
  )
}

export default App