import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../assets/hamburger.png';
import Cross  from "../assets/cross.png"
import { useState } from 'react';

function Navbar()  {
  const [nav, setNav] = useState(false);
  return (
    <div className=' flex justify-end text-gray-800 sm:px-24  pt-5 md:pt-8 md:mr-20'>
        <ul className=' hidden font-bold sm:flex justify-end  space-x-10  '>
          <li> <NavLink to= '/'  className={({isActive}) =>
             isActive ? "text-red-500" : "text-black hover:text-rose-500" } >
          Home
          </NavLink></li>
          <li> <NavLink to= '/works'  className={({isActive}) =>
             isActive ? "text-red-500" : "text-black hover:text-rose-500" } >
          Works
          </NavLink>
          </li>
          <li> <NavLink to= '/blog'  className={({isActive}) => 
          isActive ? "text-red-500" : "text-black hover:text-rose-500" } >
          Blog
          </NavLink>
          </li>
          <li> <NavLink to= '/contact'  className={({isActive}) => 
            isActive ? "text-red-500" : "text-black hover:text-rose-500"
           } >
          Contact
          </NavLink>
          </li>

        </ul>

        <div onClick={() => setNav(!nav)}>
           <div className=' flex justify-end mr-6 '>
            <img 
            src={nav ? Cross : Hamburger}
            alt={nav ? "Close" : "Open"}
            className=' h-8 w-8 cursor-pointer sm:hidden' />
           </div>
        </div>
        {nav && (
          <ul 
           className='flex flex-col justify-center items-center absolute top-0 left-0
                      w-full h-screen bg-cyan-100 text-gray-500 space-y-5 text-xl scroll-smooth '>
            <Link to = "/"><li>Home</li></Link>
            <Link to = "/works" ><li>Works</li></Link>
            <Link to = "/blog" ><li>Blog</li></Link>
            <Link to ="/contact" ><li>Contact</li></Link>
            
          </ul>
        ) }
        
    </div>
  );
}

export default Navbar