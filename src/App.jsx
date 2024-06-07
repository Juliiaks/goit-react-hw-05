import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage';
import MoviePage from "./pages/MoviesPage";
import './App.css'


function App() {
 
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />}>
          {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews/>}/>
          </Route> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
     
    </>
  )
}

export default App
