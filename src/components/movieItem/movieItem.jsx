import css from "./movieItem.module.css"

export default function MovieItem({ poster_path, original_title }) {
    return (
        <div className={css.item}>
        <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                        <p className={css.name}>{ original_title}</p>
        </div>
    )
}