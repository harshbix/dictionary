import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const apiEndpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    const fetchData = async (searchTerm) => {
        try {
            const response = await axios.get(apiEndpoint + searchTerm);
            onSearch(response.data);
        } catch (error) {
            alert('unable to search! please try another word or check connectivity');
            console.log(error)
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (searchTerm) {
            await fetchData(searchTerm);
        }
        else(
            alert('No word to search')
        )
    };

    return (
        <div>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search.."
                    name="search"
                    className="rounded-3 rounded-end-0"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="rounded-3 rounded-start-0">
                    <i className="fa fa-search purple-color"></i>
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
