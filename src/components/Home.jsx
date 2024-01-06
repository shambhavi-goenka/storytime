import MyGlobe from './MyGlobe';
import SearchBar from './SearchBar';

function Home() {

    const handleSearch = (searchTerm) => {
    };

    return (
        <div className="App">
            <SearchBar onSearch={handleSearch} />
            <MyGlobe />
        </div>
    )
}

export default Home
