import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components";
import { useEffect } from "react";


export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
   const { data: movies } = useFetch(apiPath, searchTerm);
  useEffect(() => {
    document.title = `Search Result - ${searchTerm}`;
  });

  return (
    <main>
          <section>
            <p className="text-3xl text-gray-800 dark:text-white ">{movies.length===0 ? `No Result Found for "${searchTerm}"`: `Result for search "${searchTerm}"`}</p>
          </section>
          <section className="max-w-7xl mx-auto py-7 ">
            <div className="flex justify-start flex-wrap ">
            {
              movies.map((movie) => (
              <MovieCard  key={movie.id}    movie={movie}  />
                
              ))
            }
              
              </div>
           </section>
    
    </main>
  )
}

