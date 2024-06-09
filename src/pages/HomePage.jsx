import axios from "axios"
// import MovieList from "../../components/MovieList/MoviesList
import MovieList from "../components/MovieList/MoviesList"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import css from "../components/MovieList/MovieList.module.css"
import Loader from "../components/loader/loader"


export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(false)
    
    useEffect(() => {
        async function fetchMovies() {
            try {
                setIsLoading(true)
                setError(false)
                const response = await axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US", {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODIwZGM3OGI3NDM3NjI2MDkxYWMxMTI3ZGNkYjNlYiIsInN1YiI6IjY2NjFlYTAxZmFjNzQwZDkzZGQxMGQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cz5Ih8FjpCQIQWVy5bXnY7JGL8lgaA4SkOO9TNOTbiQ"
                    }
                })
                setMovies(response.data.results)
                console.log(response);
            } catch (error) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        fetchMovies()
    }, [])
    const location = useLocation()

    
    return (
        <>
            {isLoading && <Loader />}
            {error && <p>Ooops, it is an error</p>}
            <p className={css.homeMovies}>Trending Movies</p>
            <MovieList movies={movies}
            location={ location} 
            />
        </>
    )
}