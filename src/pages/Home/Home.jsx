import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'api/fetchAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrendingMovies();
        const trendingMovies = response.data.results;
        setMovies([...trendingMovies]);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => {
            return <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
        })}
      </ul>
    </div>
  );
};

export default Home;