import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/fetchAPI';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { PageUpBtn, PageDownBtn } from 'components/LoadButton/LoadButtons';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesByQuery(query, page);
        const movies = response.data.results;
        const totalPages = response.data.total_pages;
        setTotalPages(totalPages)
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

  const handleUp = () => setPage(prevPage => prevPage + 1);
  const handleDown = () => setPage(prevPage => prevPage - 1);

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
      {page !== totalPages ? <PageUpBtn onUp={handleUp}/> : null}
      {page !== 1 ? <PageDownBtn onDown={handleDown}/> : null}
    </div>
  );
};

export default Movies;
