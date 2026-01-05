import { Link } from "react-router-dom";
import backUp from "../assets/images/backup.png";

export const MovieCard = ({movie}) => {
      const {id, original_title, overview, poster_path} = movie;
      const movieImage = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: backUp;
  return (
            <div className="bg-neutral-primary-strong dark:bg-slate-500 shadow-xs m-3 ">
                <div className=" block max-w-sm box-border p-3 bg-neutral-primary-soft dark:bg-neutral-primary-strong border border-default    
                     dark:border-default-strong  rounded-base shadow-xs  ">
                <Link to={`/movie/${id}`}>
                  <img         className="rounded-t-lg"  src={movieImage} alt="Movie Pic" />
                    </Link>

                <Link to={`/movie/${id}`}>
                  <h5 className=" mt-6 mb-2 text-2xl font-semibold tracking-tight   text-heading dark:text-heading-inverse   ">
                    {original_title}  </h5>   
                </Link>

                <p className=" mb-6 text-body dark:text-body-inverse ">{overview}
                </p>
                 
              </div>
            </div>
    
  );
};

