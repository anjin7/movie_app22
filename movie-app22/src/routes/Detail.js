import { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = useCallback(async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
    }, [id]);
    useEffect(() => {
      getMovie();
    }, [getMovie]);
    console.log(movieDetail)
  return (
    <div>
      {loading ? (
      <h2>Loading Details...</h2>
      ) : (
      <div>
        <MovieDetail
          key={movieDetail.id}
          id={movieDetail.id}
          coverImg={movieDetail.large_cover_image}
          title_long={movieDetail.title_long} 
          rating={movieDetail.rating} 
          summary={movieDetail.description_full} 
          genres={movieDetail.genres}
          runtime={movieDetail.runtime}
        />
      </div>
      )}
    </div>
  );
};

export default Detail;