import { useParams } from "react-router-dom";
import { getMovieCast } from "../api/api";
import { useEffect, useState } from "react";

export default function MovieCast(params) {
     const { movieId } = useParams();
    const [cast, setCast] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
            if (!movieId) return;
        const getData = async () => {
            try {
                const response = await getMovieCast(movieId)
                setCast(response.data.cast)
                console.log(response);
            }
            catch (error) {
                setError(true)
            }
        }
       
     getData()
    }, [movieId])
    
    return (
        <ul>
            {cast.map(({id, character, original_name, profile_path}) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name} />
                    <p>{original_name}</p>
                    <p>{ character}</p>
</li>
            ))}

        </ul>
    )
    
}