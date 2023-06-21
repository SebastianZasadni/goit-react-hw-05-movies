import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import css from './App.module.css';

const Home = lazy(() => import ('../pages/Home/Home'))
const MovieDetails = lazy(() => import ('../pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import ('../pages/Cast/Cast'))
const Reviews = lazy(() => import ('../pages/Reviews/Reviews'))
const Movies = lazy(() => import ('../pages/Movies/Movies'))

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" className={ ({isActive})  => isActive ? `${css.active}` : `${css.link}`}>Home</NavLink>
        <NavLink to="/movies" className={ ({isActive})  => isActive ? `${css.active}` : `${css.link}`}>Movies</NavLink>
      </nav>
      </div>
      <div className={css.mainSection}>
      <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      </Suspense>
    </div>
    </div>
  );
};
