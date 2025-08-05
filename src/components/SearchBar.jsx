import React, {useState} from 'react';
import "./SearchBar.css";

const SearchBar = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState('');
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value)
        if(onSearch){
            onSearch(value);
        }
    };

    return (
        <div className="SearchBar">
            <form>
                <input type="search"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Digite para pesquisar..."
                ></input>

            </form>
        </div>
    )
}

export default SearchBar;