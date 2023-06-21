import { useParams } from "react-router-dom";
import { fetchMovieById } from "api/fetchMovies";

export const MovieDetails = () => {
  const {movieId} = useParams();
  console.log(movieId)
  console.log('siema')
  return (
    <div>
      <p>Go back</p>
      <img src="" alt=" " />
      <p>{movieId}</p>
      <p>User score: </p>
      <h4>Overview</h4>
      <p>Blablabla</p>
      <h5>Genres</h5>
      <p>Drama, comedy</p>
      <p>Additional information</p>
      <p>Cast</p>
      <p>Reviews</p>
    </div>
  );
};
