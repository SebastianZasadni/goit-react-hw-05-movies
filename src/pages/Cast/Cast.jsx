import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'api/fetchAPI';
import css from './Cast.module.css';
export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCastById(movieId);
        const { data } = response;
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <ul className={css.castCard}>
      {cast.map(act => {
        const actorImage = act.profile_path
          ? `https://image.tmdb.org/t/p/w200/${act.profile_path}`
          : null;
        return (
          <li key={act.id}>
            {act.name}<br/> <img src={actorImage} alt={act.character} className={css.castCardImage}/>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
