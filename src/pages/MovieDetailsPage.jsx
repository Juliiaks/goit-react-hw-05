
import { useParams, NavLink, Outlet, useLocation, Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { getSingleMovieApi } from "../components/api/api";
// import css from "../pages/movieDetails"
import css from "../components/Details/movieDetails.module.css"
import clsx from "clsx";
import Loader from "../components/loader/loader";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
            if (!movieId) return;
        const getData = async () => {
            try {
                setIsLoading(true)
                setError(false)
                const response = await getSingleMovieApi(movieId)
                setMovie(response.data)
            }
            catch (error) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
       
     getData()
    }, [movieId])
    
    const location = useLocation()
    console.log(location);
    const goBack = useRef(location.state || "/")
    
    return (
        <div className={css.container}>
            <Link to={goBack.current} className={css.backlink}> <RiArrowGoBackFill className={css.backBtn} /></Link>
            {isLoading && <Loader />}
             {error && <p>Ooops, it is an error</p>}
            {movie&&(<div className={css.imgDescr}>
                <img className={css.img} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                <div className={css.descr}>
                    <p className={css.name}>{movie.original_title}</p>

                    <div className={css.descrCont}>

                        <ul className={css.descrList}>
                        <li className={css.descrItem}>
                            <h3 className={css.title}>OVERVIEW</h3>
                                <p className={css.ovText}>{movie.overview}</p></li>
                             <li className={css.descrItem}>
                <h3 className={css.title}>Genres</h3>
                <ul className={css.genres}>
                    {movie.genres.map(({ id, name }) => (
                        <li key={id} className={css.gItem}>
                           <p className={css.gtext}> {name}</p>
                        </li>
                    ))}
                            </ul></li>
                        </ul>

                        <ul className={css.descrList}>
                        <li className={css.descrItem}>
                            <h3 className={css.title}>Average</h3>
                            <p>{movie.vote_average}</p></li>
                        
                        <li className={css.descrItem}>
                                <h3 className={css.title}>Popularity</h3>
                                <p>{movie.popularity}</p>
                        </li>
                </ul>
               
                    </div>
                 </div>
            </div>)
            }

            <nav className={css.header}>
            <NavLink to="cast" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>CAST</NavLink>
            <NavLink to="reviews" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>REVIEWS</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}