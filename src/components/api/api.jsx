import axios from "axios"

export default async function API({ query }) {
    const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            query: query,
            Authorization: 'Bearer 1820dc78b7437626091ac1127dcdb3eb'
        }
    })
    return response
}