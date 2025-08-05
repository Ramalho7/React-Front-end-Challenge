import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import CountryListPage from './Pages/CountryListPage'
import TypeWriter from './components/TypeWriter';
import Header from './components/Header';
import Footer from './components/Footer';
import IndexPage from './Pages/IndexPage';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,population"
    ).then((response) => response.json()).then((data) => {
      console.log("Dados recebidos:", data);
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
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="countrylist" element={<CountryListPage countries={countries} loading={loading} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
