

import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components";

export const MovieList = ({apiPath, title}) => {
  
  const { data: movies } = useFetch(apiPath);
  
useEffect(() => {
  document.title = `${title} / Cinemate`;
});


  return (
    
    <main>
      
      <section className="max-w-7xl mx-auto py-7 ">
         <div className="flex justify-start flex-wrap other:justify-evenly">
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

