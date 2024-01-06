import React, { useState, useEffect } from 'react';

const PostsSearchBar = ({ onSearch, onFilter, tags, places, searchTerm }) => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        // Update selectedFilter when searchTerm changes
        setSelectedFilter('');
        setSelectedCountry('');
    }, [searchTerm]);

    const handleSearch = () => {
        onSearch(searchTerm);
    };
    
    const handleFilterChange = (event) => {
        const newFilter = event.target.value;
        setSelectedFilter(newFilter);
        // onFilter(newFilter);
        onFilter(newFilter, selectedCountry);
    };

    const handleCountryChange = (event) => {
        const newCountry = event.target.value;
        setSelectedCountry(newCountry);
        onFilter(selectedFilter, newCountry);
    };


    return (
        <div className="py-10 flex">
            {/* <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only">Categories</label> */}
            <select
                data-dropdown-toggle="dropdown"
                id='dropdown-topic'
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-s-lg hover:bg-gray-200"
                value={selectedFilter}
                onChange={handleFilterChange}>
                <option value="">Topic</option>
                {tags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>
            <select
                data-dropdown-toggle="dropdown"
                id='dropdown-region'
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border border-gray-300  text-gray-900 bg-gray-100 hover:bg-gray-200"
                value={selectedCountry}
                onChange={handleCountryChange}>
                <option value="">Region</option>
                {places.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>
            <div className="relative w-full">
                <input type="search" id='search-keys'
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                placeholder={searchTerm ? searchTerm : "Search Places, Tales..."}
                className="block w-full p-4 ps-4 text-sm text-gray-900 rounded-e-lg bg-gray-50" required>
                </input>
                <button type="button" onClick={handleSearch} className="text-white absolute end-2.5 bottom-2.5 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
        </div>


    );
};

export default PostsSearchBar;
