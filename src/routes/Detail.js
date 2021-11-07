import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./Detail.css";
function Detail(){
    
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(()=> {
       getMovie();
    }, [])
    return (
        <div className="movieInside">
            {loading ? (
                <div className="loader">
                <span>Movie Description Loading...</span>
              </div>
            ) : ( <><img src={movie.large_cover_image} alt={movie.title} className="movieInside__img" />
            <div>
                <h2 className="movieInside__title">
                    {movie.title}
                </h2>
                <h3 className="movieInside__year">Runtime: {movie.runtime}m</h3>
                <h3 className="movieInside__year">{movie.year}</h3>
                <p>{movie.description_full}</p>
            </div></> )}
            
           
        </div>
    );
}

export default Detail;