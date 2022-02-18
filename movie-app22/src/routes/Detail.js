import { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = useCallback(async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    }, [id])
    useEffect(() => {
    getMovie()
    }, [getMovie])
  return (
    <div>
      {loading ? (
      <h2>Loading Details...</h2>
      ) : (
      <div>
        {movie.map(m => (
          <MovieDetail
            key={m.id}
            id={m.id}
            coverImg={m.large_cover_image}
            title_long={m.title_long} 
            rating={m.rating} 
            summary={m.summary} 
            genres={m.genres} 
          />
        ))}
      </div>
      )}
    </div>
  );
};

export default Detail;