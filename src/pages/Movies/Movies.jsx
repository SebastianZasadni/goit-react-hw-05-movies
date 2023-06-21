import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/fetchAPI';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loadBtn, setLoadBtn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesByQuery(query, page);
        const movies = response.data.results;
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = query => {
    setPage(1);
    setSearchParams({ query: query });
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button type="submit" onClick={() => setPage(prevPage => prevPage + 1)}>
        Page up
      </button>
      <button
        type="submit"
        onClick={() => (page > 1 ? setPage(prevPage => prevPage - 1) : null)}
      >
        Page down
      </button>
    </div>
  );
};

export default Movies;
