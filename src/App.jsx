import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import MoviePage from "./pages/MoviesPage";
import './App.css'


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
     
    </>
  )
}

export default App
