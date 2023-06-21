import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/fetchAPI';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { PageUpBtn, PageDownBtn } from 'components/LoadButton/LoadButtons';
import css from './Movies.module.css';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const pageURL = searchParams.get('page') ?? '';
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(pageURL);
  const [totalPages, setTotalPages] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (!query && !pageURL) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetchMoviesByQuery(query, pageURL);
        const movies = response.data.results;
        const { total_results, total_pages } = response.data;
        if (!total_results && query) {
          return alert('Wooops! We found nothing.');
        }
        setTotalPages(total_pages);
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, [query, pageURL]);

  const handleSubmit = query => {
    setPage(1);
    setSearchParams({ query: query, page: 1 });
  };

  const handleUp = () => {
    setPage(prevPage => prevPage + 1);
    setSearchParams({ query: query, page: page + 1 });
  };

  const handleDown = () => {
    setPage(prevPage => prevPage - 1);
    setSearchParams({ query: query, page: page - 1 });
  };

  return (
    <div className={css.moviesSection}>
      <SearchBar handleSubmit={handleSubmit} />
      <ul className={css.moviesList}>
        {query
          ? movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link
                    className={css.movieLink}
                    to={`${movie.id}`}
                    state={{ from: location }}
                  >
                    {movie.title}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
      {query && page !== 1 ? <PageDownBtn onDown={handleDown} /> : null}
      {query && page !== totalPages && totalPages > 1 ? (
        <PageUpBtn onUp={handleUp} />
      ) : null}
    </div>
  );
};

export default Movies;
