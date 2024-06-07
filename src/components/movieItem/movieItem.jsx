export default function MovieItem({poster_path, original_title}) {
    return (
        <>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                        <p>{ original_title}</p>
        </>
    )
}