import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink} from "react-router-dom"
import Logo from "../assets/logo.png";

export const Header = () => {
    const [hidden, setHidden] =  useState(true);      //"lazy initialization"
    const [darkMode, setDarkMode] =useState( ()=> { return JSON.parse(localStorage.getItem("darkMode")) ?? true; });

    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));

      if (darkMode) 
        {document.documentElement.setAttribute("data-theme", "dark")}
      else {document.documentElement.removeAttribute("data-theme")} 
    }, [darkMode]);
  const activeClass = "text-base block pb-4 pt-2 px-3 rounded md:p-0 text-black bg-brand  md:bg-transparent md:text-fg-brand dark:text-white";
  const inactiveClass = "text-base block pb-4 pt-2 px-3 rounded md:p-0 text-heading  hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand  dark:text-gray-300 dark:hover:text-white";
       
  const Navigate = useNavigate();
        const handleSubmit = (event) => {
          event.preventDefault();
          const searchTerm = event.target.search.value;
          console.log("Search Term:", searchTerm);
          event.target.reset();
          return Navigate(`/search?q=${searchTerm}`);

        }

  return (
    <header >

<nav className="bg-neutral-primary border-gray-200 border-b-2 px-2 sm:px-4 py-2 dark:border-b dark:border-gray-800 dark:bg-gray-800">
  <div className=" flex flex-wrap items-center justify-between mx-auto">
    <Link to="/" className="flex items-center ">
        <img src={Logo} className="mr-12 h-7 sm:h-9 " alt="CineMate Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CineMate</span>
    </Link>

    <div id="mobile-nav" className=" flex items-center md:order-2">
      <button onClick={() => {setDarkMode(!darkMode)}} data-tooltip-target="tooltip-dark" type="button" className=" flex items-center justify-center bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary font-medium leading-5 rounded w-10 h-10 focus:outline-none mr-2" >
     {(darkMode) ? (<svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
      </svg>) : (<svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" fill="none" viewBox="0 0 24 24"> 
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
           d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
            </svg>)}
      

      {/* <svg id="theme-toggle-dark-icon" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"/> */}

      </button>
        <button onClick={()=>setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm w-10 h-10 focus:outline-none">
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
          <span className="sr-only">Search</span>
                  
        </button>

          <label htmlFor="input-group-1" className="sr-only">Your Email</label>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
             <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>

                <form onSubmit={handleSubmit}>
            <input type="text" id="input-group-1" name="search" className="block w-full ps-9 pe-3 py-2\.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body" autoComplete="off" placeholder="Search"/>
              </form>
          </div>

        <button onClick={()=>setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
    </div>

      <div className={`${hidden ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search"`}>
          <div className="relative mt-3 md:hidden">
            <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            
             <form onSubmit={handleSubmit}>
            <input type="text" id="input-group-1" name="search" className="block w-full ps-9 pe-3 py-2\.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" autoComplete="off" placeholder="Search"/>
              </form>
          
          </div>
       
          <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:border-0 md:bg-neutral-primary  dark:bg-gray-800  ">
            <li>
            <NavLink to="/" className={({isActive})=> (isActive ? activeClass : inactiveClass)} end >Home</NavLink>
            </li>
            <li>
              <NavLink to="movie/popular" className={({isActive})=>(isActive ? activeClass : inactiveClass)} >Popular</NavLink>
            </li>
            <li>
              <NavLink to="movie/top" className={({isActive})=>(isActive ? activeClass : inactiveClass)}>Top</NavLink>
            </li>
            <li>
              <NavLink to="movie/upcoming" className={({isActive})=>(isActive ? activeClass : inactiveClass)}>Upcoming</NavLink>
            </li>
          </ul>
      </div>
  </div>
</nav>

</header>
  )
}

