import "../css/MovieCard.css"

function MovieCard({movie}){

    function onFavclick(){
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src="" alt="movie.title" />
            <div className="movie-overlay">
                <button className="fav-btn" onClick={onFavclick}>
                    n
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

    </div>

}

export default MovieCard;