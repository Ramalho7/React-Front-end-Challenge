import React from 'react';
import "./SortControl.css";

const SortControl = ({ sort, setSort }) => {

    const handleSortChange = (e) => {
        const value = e.target.value;
        const [keyToSort, direction] = value.split('-')
        setSort({ keyToSort, direction })
    }

    return (
        <div className="sort-container">
            <div className="custom-select">
                <select id="sort" className='sort-select' onChange={handleSortChange} value={`&{sort.keyToSort}-&{sort.direction}`}>
                    <option value="" defaultValue="Selecione como Ordenar...">Ordernar por...</option>
                    <option value="population-asc">População (Crescente)</option>
                    <option value="population-desc">População (Decrescente)</option>
                    <option value="region-asc">Região (A-Z)</option>
                    <option value="region-desc">Região (Z-A)</option>
                </select>
            </div>
        </div>
    )
}

export default SortControl;