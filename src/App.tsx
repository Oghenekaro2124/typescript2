import {useState, useEffect} from 'react';
import {fetchMovieData} from "./lib/apis/movieApis";
import MovieCard from './components/MovieCard';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // const [pageNumber, setPageNum] = useState<number>(1);
  
  useEffect(() => {
    const onGetMovieData = async () => {
      const result = await fetchMovieData(1);

      if (result?.error) {
        return setErrorMessage(result.error);
      }

      return setMovies(result?.data);
    };

    onGetMovieData();
  }, []);

  console.log(movies);
  return (
    <section className='container mx-auto my-24'>
      {errorMessage && (
        <p className='text-center text-[red] text-sm'>{errorMessage}</p>
      )}
      <div className='grid grid-cols-4 gap-5'>
        {movies && 
        movies.length > 0 &&
        movies.map((movie: any) => (
          <MovieCard title={movie?.original_title} overview={movie.overview} imageUrl={movie?.poster_path} key={movie?.id}/>
        ))}
      </div>

    </section>
  );
};

export default App