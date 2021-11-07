import Proptypes from "prop-types";
import {Link} from "react-router-dom";

import "./Movie.css";
function Movie({id, coverImg, title, year, summary, genres}) {
    return(
    <div className="movie">
      <img src={coverImg} alt={title} className="movie__img" />
      <div>
        <h2 className="movie__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className="movie__year">{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className="movie__genres">
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
  </div>
    );
}

Movie.prototype = {
    id: Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired,
}

export default Movie;