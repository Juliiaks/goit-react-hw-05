import { getMovieReviews } from "../api/api";
import { useEffect, useRef, useState } from "react";
import {  useParams } from "react-router-dom";
import css from "./movieReviews.module.css"
import Loader from "../loader/loader";
import NotFound from "../../pages/NotFoundPage";

export default function MovieReviews(params) {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(false)
    const[isLoading, setIsLoading] = useState(false)

    useEffect(() => {
            if (!movieId) return;
        const getData = async () => {
            try {
                setIsLoading(true)
                setError(false)
                const response = await getMovieReviews(movieId)
                setReviews(response.data.results)
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

  

    return (
        <>
            {isLoading && <Loader />}
             {error && <p>Ooops, it is an error</p>}
            <ul className={css.list}>
                
            {reviews.length===0 ? (<NotFound/>) :(reviews.map(({author, content, id, created_at}) => (
                <li key={id} className={css.listItem}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                    <p>{created_at}</p>
</li>
            )))}
            </ul>
        </>
    )
}