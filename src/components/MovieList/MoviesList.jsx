
import MovieItem from "../movieItem/movieItem"

export default function MovieList({movies}) {
    return (
        <>
            <ul>
                {movies.map(({id, original_title, poster_path})=> (
                <li key={id}>
                        <MovieItem original_title={original_title} poster_path={poster_path}/>
                    </li>
                ))}
            </ul>
        </>
    )
}