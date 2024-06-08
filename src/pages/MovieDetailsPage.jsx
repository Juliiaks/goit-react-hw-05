
import { useParams, Link, Outlet, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { getSingleMovieApi } from "../components/api/api";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
            if (!movieId) return;
        const getData = async () => {
            try {
                const response = await getSingleMovieApi(movieId)
                setMovie(response.data)
            }
            catch (error) {
                setError(true)
            }
        }
       
     getData()
    }, [movieId])
    
    const location = useLocation()
    console.log(location);
    
    return (
        <div>
            <Link to={location.state}> Go back</Link>
            {movie&&(<div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
 <p>{movie.original_title}</p>
                <h2>OVERVIEW</h2>
                <p>{movie.overview}</p>
                <h2>Average</h2>
                <p>{movie.vote_average}</p>
                <h2>Genres</h2>
                <ul>
                    {movie.genres.map(({ id, name }) => (
                        <li key={id}>
                           <p> {name}</p>
                        </li>
                    ))}
                </ul>
                 
            </div>)
            }

            <nav>
            <Link to="cast" >CAST</Link>
            <Link to="reviews">REVIEWS</Link>
            </nav>
            <Outlet />
        </div>
    )
}