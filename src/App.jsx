import { Routes, Route } from "react-router-dom";
// import HomePage from './pages/HomePage';
// import MoviePage from "./pages/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
// import NotFound from "./pages/NotFoundPage";
import './App.css'
import NavBar from "./components/Navigation/NavBar";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import('./pages/HomePage'))
const MoviePage = lazy(() => import('./pages/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))
const NotFound = lazy(() => import('./pages/NotFoundPage'))


function App() {
 
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
     </Suspense>
    </>
  )
}

export default App
