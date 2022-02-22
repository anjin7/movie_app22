import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title_long, summary, genres }){
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title_long} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title_long}</Link>
      </h2>
      <div className={styles.container}>
        <p className={styles.movie__summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres === null ?  "" : genres.map(g => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>    
    </div>
  )
};

Movie.propTypes ={
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;