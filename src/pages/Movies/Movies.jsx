import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/fetchMovies';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesByQuery(query, page);
        const movies = response.data.results;
        setMovies([...movies]);
        console.log(movies);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
