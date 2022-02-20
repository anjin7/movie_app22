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
        {movieDetail.map(md => (
          <MovieDetail
          key={md.id}
          id={md.id}
          coverImg={md.large_cover_image}
          title_long={md.title_long} 
          rating={md.rating} 
          summary={md.summary} 
          genres={md.genres} 
        />
        ))}
      </div>
      )}
    </div>
  );
};

export default Detail;