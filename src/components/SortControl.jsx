import React from 'react';
import Select from 'react-select';
import "./SortControl.css";

const SortControl = ({ sort, setSort }) => {
    const options = [
        { value: 'population-asc', label: 'População (Crescente)' },
        { value: 'population-desc', label: 'População (Decrescente)' },
        { value: 'region-asc', label: 'Região (A-Z)' },
        { value: 'region-desc', label: 'Região (Z-A)' }
    ];

    const handleSortChange = (selectedOption) => {
        if (selectedOption) {
            const [keyToSort, direction] = selectedOption.value.split('-');
            setSort({ keyToSort, direction });
        }
    };

    return (
        <div className="sort-container">
            <div className="custom-select">
                <Select
                    id="sort"
                    className="sort-select"
                    onChange={handleSortChange}
                    value={options.find(option => option.value === `${sort.keyToSort}-${sort.direction}`)}
                    options={options}
                />
            </div>
        </div>
    );
};

export default SortControl;