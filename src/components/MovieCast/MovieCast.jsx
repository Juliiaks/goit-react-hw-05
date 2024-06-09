import { Link, useLocation, useParams } from "react-router-dom";
import { getMovieCast } from "../api/api";
import { useEffect, useState } from "react";
import css from "./movieCast.module.css"

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

    const location = useLocation()
    
    return (<>
        {/* <Link to={location.state}>Close</Link> */}
        <ul className={css.castlist}>
            {cast.map(({id, character, original_name, profile_path}) => (
                <li key={id} className={css.listitem}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name} className={css.castimg} />
                    <p className={css.name}>{original_name}</p>
                    <p className={css.role}>{ character}</p>
</li>
            ))}

        </ul>
    </>
    )
    
}