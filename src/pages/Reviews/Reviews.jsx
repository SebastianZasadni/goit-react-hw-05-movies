import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'api/fetchAPI';
import css from './Reviews.module.css';

const Reviews = () => {
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
      {reviews.length === 0 && <p>We don't have any reviews for this movies</p>}
      {reviews
        .filter((review, index) => index < 5)
        .map(review => {
          const { id, author, content } = review;
          return (
            <li key={id}>
              <p className={css.reviewAuthor}>Author: {author}</p>
              {content}
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
