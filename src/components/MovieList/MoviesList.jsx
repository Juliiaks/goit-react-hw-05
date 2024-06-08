import { Link } from "react-router-dom"
import MovieItem from "../movieItem/movieItem"

export default function MovieList({movies, location}) {
    return (
        <>
            <ul>
                {movies.map(({id, original_title, poster_path})=> (
                   
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={location}>
                            <MovieItem original_title={original_title} poster_path={poster_path} />
                        </Link>
                    </li>
                   
                ))}
            </ul>
        </>
    )
}