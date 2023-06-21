import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import ('../pages/Home/Home'))
const MovieDetails = lazy(() => import ('../pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import ('../pages/Reviews/Reviews'))
const Reviews = lazy(() => import ('../pages/Reviews/Reviews'))
const Movies = lazy(() => import ('../pages/Movies/Movies'))

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
