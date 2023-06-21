import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';
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
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};
