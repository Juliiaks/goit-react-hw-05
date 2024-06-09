import { Link } from "react-router-dom"
import MovieItem from "../movieItem/movieItem"
import css from "./MovieList.module.css"

export default function MovieList({movies, location}) {
    return (
        <div children={css.container}>
            
            <ul className={css.list}>
                {movies.map(({id, original_title, poster_path})=> (
                   
                    <li key={id} className={css.listItem}>
                        <Link to={`/movies/${id}`} state={location}>
                            <MovieItem original_title={original_title} poster_path={poster_path} />
                        </Link>
                    </li>
                   
                ))}
            </ul>
        </div>
    )
}