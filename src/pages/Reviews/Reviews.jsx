import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'api/fetchAPI';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchReviewsById(movieId);
        const { results } = data;
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {reviews.map(review => {
        const { id, author, content } = review;
        return (
          <li key={id}>
            <b>Author:</b> <i>{author}</i>
            <br />
            {content}
          </li>
        );
      })}
    </ul>
  );
};
