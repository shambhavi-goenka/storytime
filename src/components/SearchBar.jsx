import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // Call the onSearch prop with the current search term
        onSearch(searchTerm);
        // Redirect to the "/posts" route with the search term
        navigate(`/posts?search=${searchTerm}`);
    };

    return (

        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
            className='flex justify-center pt-14'
        >
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className='relative w-3/4 md:w-4/5 xs:w-11/12'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    
                </div>
                <input type="search" id="default-search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Places, Tales..." required></input>
                <button type="button" onClick={handleSearch} className="text-white absolute end-2.5 bottom-2.5 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
