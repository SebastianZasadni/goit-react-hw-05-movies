import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'api/fetchAPI';
import Reviews from 'pages/Reviews/Reviews';
import Cast from 'pages/Cast/Cast';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  console.log(location)
  const backLink = `${
    location.state ? '/movies' + location.state.from.search : '/'
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchMovieById(movieId);
        setMovieData(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, []);

  const { title, overview, genres, vote_average, poster_path, release_date } =
    movieData;

  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : null;

  const releaseYear = new Date(release_date).getFullYear();

  return (
    <div className={css.movieSection}>
      <Link to={`${backLink}`} className={css.backBtn}>Go back</Link>
      <div className={css.movieCard}>
        <img src={movieImage} alt={title} className={css.movieCardImage} />
        <div className={css.movieCardInfo}>
          <p className={css.movieCardTitle}>
            {title}({releaseYear})
          </p>
          <p>User score: {vote_average}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h5>Genres</h5>
          <ul>
            {genres
              ? genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })
              : null}
          </ul>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <Link className={css.additionalLink} to="cast" element={<Cast />}>
          Cast
        </Link><br/>
        <Link className={css.additionalLink} to="reviews" element={<Reviews />}>
          Reviews
        </Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
