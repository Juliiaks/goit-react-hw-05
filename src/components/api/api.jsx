import axios from "axios"

export default async function API( query ) {
    const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
        headers: {
           
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODIwZGM3OGI3NDM3NjI2MDkxYWMxMTI3ZGNkYjNlYiIsInN1YiI6IjY2NjFlYTAxZmFjNzQwZDkzZGQxMGQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cz5Ih8FjpCQIQWVy5bXnY7JGL8lgaA4SkOO9TNOTbiQ'
        },
        params:{
            query: query,
            // year: "2023",
            primary_release_year: "2010"
        }
    })
    return response
}

export const getSingleMovieApi = async (id) => {
     const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, { headers: {
           
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODIwZGM3OGI3NDM3NjI2MDkxYWMxMTI3ZGNkYjNlYiIsInN1YiI6IjY2NjFlYTAxZmFjNzQwZDkzZGQxMGQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cz5Ih8FjpCQIQWVy5bXnY7JGL8lgaA4SkOO9TNOTbiQ'
        }})
    return response
    
}