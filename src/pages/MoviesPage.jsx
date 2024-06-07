import { useEffect, useState } from "react"
import API from "../components/api/api"
import SearchBar from "../components/SearchBar/SearchBar"
import MovieList from "../components/MovieList/MoviesList"

export default function MoviePage() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function getMovies() {
            try {
        setError(false)
        const data = await API(search)
        setMovies(data.data.results)
    } catch (error) {
        setError(true)
      console.log(error);          
    }
}
 getMovies()   
    },[search])
    
    const handleSubmit = async (searchQuery) => {
        setMovies([])
    setSearch(searchQuery)

    }

    return (
        <>
    <p>Movies</p>
            <SearchBar
            submit={handleSubmit}
            /> 
            <MovieList movies={movies}/>
        </>
    )
}