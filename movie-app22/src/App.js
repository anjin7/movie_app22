import { useEffect, useState } from 'react'
import './App.module.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false)
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies)
  return (
    <div>
      {loading ? (
      <h2>Loading...</h2>
      ) : (
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>{movie.title_long}</h2>
            <p>{movie.rating}</p>
            <p>{movie.summary}</p>
            <ul>
              {movie.genre === null ?  "" : movie.genres.map(g => (
                <li key={g}>{g}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default App;
