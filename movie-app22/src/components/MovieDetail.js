import PropTypes from "prop-types";

function MovieDetail({ coverImg, title_long, rating, summary, genres, runtime }){
  return (
    <div>
      <img src={coverImg} alt={title_long} />
      <h2>{title_long}</h2>
      <h3>{rating}</h3>
      <h4>{runtime}</h4>
      <p>{summary}</p>
      <ul>
        {genres === null ?  "" : genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
};

MovieDetail.propTypes ={
  coverImg: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;