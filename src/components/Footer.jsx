import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    

    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-body sm:text-center">© 2030 <Link to="/" className="hover:underline">CineMate™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
            <li>
                <a href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank" className="hover:underline me-4 md:me-6">Facebook</a>
            </li>
            
            <li>
                <a href="https://www.youtube.com/watch?v=FnvXdN_1AL4" target="_blank" className="hover:underline me-4 md:me-6">Youtube</a>
            </li>
            <li>
                <a href="https://github.com/ShubhamSarda/react-ul/tree/main/075/src" target="_blank" className="hover:underline">Github</a>
            </li>
        </ul>
        </div>
    </footer>

  )
}

