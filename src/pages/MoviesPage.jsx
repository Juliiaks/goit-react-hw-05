import { useEffect, useState } from "react"
import API from "../components/api/api"


export default function MoviePage() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getMovies() {
            try {
        setError(false)
        const data = await API(query)
        setMovies(data.data.results)
    } catch (error) {
        setError(true)
      console.log(error);          
    }
}
 getMovies()   
})

    return (
        <>
    <p>Movies</p>
            <form  >
          <input
            
      type="text"
      autoComplete="off"
      autoFocus
     placeholder="Search the best movies"
    name='search'
    />
                <button type="submit">Search</button>
          
  </form>
        </>
    )
}