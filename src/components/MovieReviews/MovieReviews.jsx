import { getMovieReviews } from "../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews(params) {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
            if (!movieId) return;
        const getData = async () => {
            try {
                const response = await getMovieReviews(movieId)
                setReviews(response.data.results)
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
            {reviews.map(({author, content, id, created_at}) => (
                <li key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                    <p>{created_at}</p>
</li>
            ))}
        </ul>
    )
}