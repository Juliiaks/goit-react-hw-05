import {  useParams } from "react-router-dom";
import { getMovieCast } from "../api/api";
import { useEffect, useState } from "react";
import css from "./movieCast.module.css"
import Loader from "../loader/loader";
import NotFound from "../../pages/NotFoundPage";

export default function MovieCast(params) {
     const { movieId } = useParams();
    const [cast, setCast] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
            if (!movieId) return;
        const getData = async () => {
            try {
                setIsLoading(true)
                const response = await getMovieCast(movieId)
                setCast(response.data.cast)
                console.log(response);
            }
            catch (error) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
       
     getData()
    }, [movieId])

   
    return (<>
        {isLoading && <Loader />}
         {error && <p>Ooops, it is an error</p>}
        <ul className={css.castlist}>
            {cast.length===0 ? (<NotFound/>) : (cast.map(({id, character, original_name, profile_path}) => (
                <li key={id} className={css.listitem}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name} className={css.castimg} />
                    <p className={css.name}>{original_name}</p>
                    <p className={css.role}>{ character}</p>
</li>
            )))}

        </ul>
    </>
    )
    
}