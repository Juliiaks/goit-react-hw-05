import { useEffect, useState } from "react"
import API from "../components/api/api"
import SearchBar from "../components/SearchBar/SearchBar"
import MovieList from "../components/MovieList/MoviesList"
import { useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom";


export default function MoviePage() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
        // const [search, setSearch] = useState("");
    
const [searchParams, setSearchParams] = useSearchParams()
    const movieTitle = searchParams.get("original_title") ?? "";

    useEffect(() => {
        async function getMovies() {
            try {
        setError(false)
        const data = await API(movieTitle)
        setMovies(data.data.results)
    } catch (error) {
        setError(true)
      console.log(error);
    }
}
 getMovies()
    },[movieTitle])
    
    // const handleSubmit = async (searchQuery) => {
    //     setMovies([])
    // setSearch(searchQuery)

    // }
    
    
    
    const visibleMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(movieTitle.toLowerCase())
    );
    
    const updateQueryString = (original_title) => {
    const nextParams = original_title !== "" ? { original_title } : {};
    setSearchParams(nextParams);
  };
    
    const location = useLocation()

    return (
        <>
            <SearchBar
                value={movieTitle}
                onChange={updateQueryString}
            /> 
            <MovieList movies={visibleMovies }
                location={ location} />
        </>
    )
}