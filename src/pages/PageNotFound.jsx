
import { useEffect } from "react";
import imageNotFound from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";

export const PageNotFound = ({title}) => {
    useEffect(() => {
      document.title = `${title} / Cinemate`;
    }, []);

  return (
    <main>
    <section className="flex flex-col justify-center mx-20">
      <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-green-500 font-bold my-10 dark:text-white">404 Oops!</p>
          <div className="max-w-lg">
        <img className="rounded-lg" src={imageNotFound} alt="404 img not found" />
          </div>
      </div>

      <div className="flex justify-center my-5">
         <Link to='/'>
          <button className="w-64 text-xl text-gray-900 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600 py-3 mx-10 rounded-xl font-medium     ">Back to Cinemate</button>
         </Link>

      </div>
    </section>
    
    </main>
  )
}
