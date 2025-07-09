import MovieCard from "../components/movieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
    {id: 1, title: "John Wick", release_date:"2014"},
    {id: 2, title: "Terminator", release_date:"1999"},
    {id: 3, title: "The Matrix", release_date:"1998"},
    {id: 4, title: "The Dark Knight", release_date:"2005"}
    ]

    const HandleSearch = (e) => {
        e.preventDefault()

    }

    return <div className="home">
        <form onSubmit={HandleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..."  className="search-image" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) =>
            (
            <MovieCard movie={movie} key={movie.id}/>)
            )}
        </div>

    </div>

}
export default Home;