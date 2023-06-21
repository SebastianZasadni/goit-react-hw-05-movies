import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'api/fetchAPI';
import Reviews from 'pages/Reviews/Reviews';
import Cast from 'pages/Cast/Cast';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
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
    : 'No image';

  const releaseYear = new Date(release_date).getFullYear();

  return (
    <div>
      <Link to={`${backLink}`}>Go back</Link>
      <img src={movieImage} alt={title} />
      <p>
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
      <p>Additional information</p>
      <Link to="cast" element={<Cast />}>
        Cast
      </Link>
      <Link to="reviews" element={<Reviews />}>
        Reviews
      </Link>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
