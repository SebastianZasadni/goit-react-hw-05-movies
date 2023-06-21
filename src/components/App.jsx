import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import Movies from '../pages/Movies/Movies';
export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
