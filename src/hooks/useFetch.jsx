import { useEffect, useState } from "react";


export const useFetch = (apiPath, searchTerm="") => {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${API_KEY}&language=en-US&page=1&query=${searchTerm}`;
  
  useEffect(() => {
    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
    }
    fetchData();
   }, [url]);
  
  
    return (
     {data}
    
    );
}
