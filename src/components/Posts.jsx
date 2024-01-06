import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import PostsSearchBar from './PostsSearchBar';
import { articles } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const initialSearchTerm = searchParams.get('search') || '';
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [currentFilter, setCurrentFilter] = useState('');
    const [currentRegion, setCurrentRegion] = useState('');

    // Extract unique tags from articles
    const allTags = Array.from(new Set(articles.flatMap((article) => article.tags)));
    const allPlaces = Array.from(new Set(articles.flatMap((article) => article.place)));

    const handleSearch = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
        // Redirect to the "/posts" route with the search term
        navigate(`/posts?search=${newSearchTerm}`);
    };

    const handleFilter = (filter, region) => {
        setCurrentFilter(filter);
        setCurrentRegion(region);
    };

    const filteredArticles = articles
        .filter((article) =>
            article.content[0].toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((article) => (currentFilter ? article.tags.includes(currentFilter) : true))
        .filter((article) => (currentRegion ? article.place === currentRegion : true));

    useEffect(() => {
        // Update search term when it changes in the URL
        setSearchTerm(initialSearchTerm);
    }, [initialSearchTerm]);

    return (
        <div className='pb-24'>
                <div className='relative w-3/4 md:w-4/5 xs:w-11/12 mx-auto'>
                        <PostsSearchBar onSearch={handleSearch} onFilter={handleFilter} tags={allTags} places={allPlaces} searchTerm={searchTerm} />
                </div>
            {/* <p>Current Filter: {currentFilter}</p>  */}

            <ul>
                {filteredArticles.map((article) => (
                    <li key={article.id} className="border w-4/5 mx-auto border-gray-400 rounded-lg md:p-4 bg-lime-950 sm:py-3 py-4 px-2 m-10">
                        <div className='flex items-center'>
                            <div className="m-2 flex items-center flex-shrink-0">
                                <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" 
                                    className="object-cover rounded-full w-24 h-24 sm:w-30 sm:h-30 md:w-44 md:h-44 lg:w-48 lg:h-48" alt={article.title} />
                            </div>
                            <div className="pl-12 md:pl-10 xs:pl-10">
                                <Link to={`/posts/${article.id}`}>
                                    <h2 className="text-2xl font-bold mb-2 text-white hover:text-[#227fe3] leading-7">{article.title}</h2>
                                </Link>
                                <p className="text-xs text-slate-600 mb-2">
                                    <span>{article.date}</span>
                                </p>

                                <div className='mb-2 leading-6'>
                                    <p>{article.content[0].length > 100 ? `${article.content[0].slice(0, 100)}...` : article.content[0]}</p>
                                </div>

                                <div className="mb-2 flex flex-wrap">
                                    <div className="text-sm text-slate-600 hover:text-red-700 flex mr-4">
                                        <span>
                                            <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
                                        </span>
                                        <p>{article.place}</p>
                                    </div>
                                    {article.tags.map((tag, index) => (
                                        <div key={index} className="text-sm text-slate-600 hover:text-yellow-700 flex mr-4">
                                            <span>
                                                <FontAwesomeIcon icon={faTag} className="mr-1" />
                                            </span>
                                            <p>{tag}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Posts;

