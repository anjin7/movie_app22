import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Movie({ coverImg, title_long, rating, summary, genres }){
  return (
    <div>
      <img src={coverImg} alt={title_long} />
      <h2>
        <Link to="/movie">{title_long}</Link>
      </h2>
      <p>{rating}</p>
      <p>{summary}</p>
      <ul>
        {genres === null ?  "" : genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
};

Movie.propTypes ={
  coverImg: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;