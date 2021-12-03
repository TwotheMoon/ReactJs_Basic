import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movie);
        setLoading(false);
        console.log(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {
                loading ? <h1>Loading...</h1> :
                    <div>
                        <h1>Detail {movie.title_long}</h1>
                        <img src={movie.large_cover_image}></img>
                        <h2>{movie.title}</h2>
                        <p>{movie.description_full}</p>
                        <div>{movie.genres}</div>
                    </div>
            }

        </div>
    );
}
export default Detail;