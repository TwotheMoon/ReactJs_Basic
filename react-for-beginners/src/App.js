import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )).json(); // api json 데이터 가져오기 축약 형 .then 사용과 같은 이치
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ?
        <h1>Loading...</h1>
        :
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map(genres =>
                  <li key={genres}>{genres}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      };
    </div >
  );
}

export default App;
