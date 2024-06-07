import axios from "axios"
import MovieList from "../components/MovieList/MoviesList"
import { useEffect, useState } from "react"
export default function HomePage() {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US", {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODIwZGM3OGI3NDM3NjI2MDkxYWMxMTI3ZGNkYjNlYiIsInN1YiI6IjY2NjFlYTAxZmFjNzQwZDkzZGQxMGQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cz5Ih8FjpCQIQWVy5bXnY7JGL8lgaA4SkOO9TNOTbiQ"
                    }
                })
                setMovies(response.data.results)
                console.log(response);
            } catch (error) {
                
            }
        }
        fetchMovies()
    },[])
    
    return (
        <>
            <p>Trending Movies</p>
            <MovieList movies={ movies} />
        </>
    )
}