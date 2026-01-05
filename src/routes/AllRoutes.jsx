import {Routes, Route} from "react-router-dom";
import {MovieList, MovieDetail, PageNotFound, Search} from "../pages/index.jsx";




export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home"/>} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movie/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
            <Route path="movie/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>} />
            <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming" title ="Upcoming"/>} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="admin" element={<MovieList />} />
            <Route path="*" element={<PageNotFound title="Page Not Found"/>} />
        




        </Routes>
    </div>
  )
}

