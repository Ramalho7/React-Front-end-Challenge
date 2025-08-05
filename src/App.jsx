import { useState, useEffect } from 'react'
import './App.css'
import CountryList from './components/CountryList'
import TypeWriter from './components/TypeWriter';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';


function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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
      <SearchBar onSearch={setSearch} />
      <CountryList countries={countries} loading={loading} search={search}/>
      <Footer />
    </div>
  )
}

export default App