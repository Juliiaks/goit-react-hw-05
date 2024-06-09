import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import MoviePage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import './App.css'
import NavBar from "./components/Navigation/NavBar";


function App() {
 
  return (
    <>
     <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews/>} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
     
    </>
  )
}

export default App
