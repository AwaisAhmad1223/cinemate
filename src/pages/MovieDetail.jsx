import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backUp from "../assets/images/backup.png";
import { use } from "react";

export const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  
  const movieImage = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: backUp;
  
  useEffect(() => {
      const fetchMovie =async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9455c137cff02f9978d9bafd90426590&language=en-US`);
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }
    fetchMovie();
  }, [params.id]);

      useEffect(() => {
        document.title = `${movie.title ? movie.title : "Movie Detail"} / Cinemate`;
      });

  return (
    <main>
    <section className="flex justify-around flex-wrap py-5  ">
      <div className="max-w-72 mt-10 "> 
      <img className="rounded" src={movieImage} alt={movie.title} /></div>
      
      <div className="max-w-2xl text-gray-800 text-lg dark:text-white">
          <h2 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h2>
          <p className="my-4 text-lg">{movie.overview}</p>
          {movie.release_date && (<p className="my-3"><strong className="mr-2">Release Date :</strong>{movie.release_date}</p>)}
            {movie.runtime && (<p className="my-2"><strong>Runtime:</strong> {movie.runtime} minutes</p>
            )}
            {movie.genres ? <p className="my-5 flex flex-wrap gap-2">{movie.genres.map((genre) => 
            (<span className=" inline-block bg-blue-200 text-blue-700 px-5 mr-3 rounded-full" key={genre.id}>
            {genre.name}</span>)) }</p>: ""}

            <div className="flex items-center">
              <svg className="w-5 h-5 text-medium text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/> </svg>
              <p className="ml-2 font-medium text-gray-700 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-neutral-quaternary rounded-full"></span>
              <span className=" text-gray-700 font-medium dark:text-white">{movie.vote_count} reviews</span>
            </div>
            <p className="my-4">
              <span className="ml-2 font-bold text-lg">Budget : </span>
              <span>{movie.budget}</span>
            </p>
            <p className="my-4">
              <span className="ml-2 font-bold text-lg">Revenue : </span>
              <span>{movie.revenue}</span>
            </p>
            <p className="my-4">
              <span className="ml-2 font-bold text-lg">IMDB Code : </span>
              <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
            </p>
      </div>
     
      

    </section>
    </main>
  )
}

