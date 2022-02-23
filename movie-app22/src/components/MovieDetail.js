import PropTypes from "prop-types";
import styles from './MovieDetail.module.css'

function MovieDetail({ coverImg, title_long, rating, summary, genres, runtime }){
  return (
    <div className={styles.movie_detail}>
      <img src={coverImg} alt={title_long} className={styles.md__img} />
      <div className={styles.md__container}>
        <h2 className={styles.md__title}>{title_long}</h2>
        <h3 className={styles.md__rating}>⭐ {rating}</h3>
        <h4 className={styles.md__runtime}>{Math.floor(runtime/60)}h {runtime%60}m ({runtime}m)</h4>
        <ul className={styles.md__genres}>
          {genres === null ?  "" : genres.map(g => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p className={styles.md__summary}>{summary}</p>
        
      </div>
      
    </div>
  )
};

MovieDetail.propTypes ={
  coverImg: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;