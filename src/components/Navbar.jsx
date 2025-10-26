import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../assets/hamburger.png';
import Cross  from "../assets/cross.png"
import { useState } from 'react';

function Navbar()  {
  const [nav, setNav] = useState(false);
  return (
    <div className='flex justify-end text-gray-800 sm:px-24 pt-5 md:pt-8 md:mr-20 relative z-50'>
        <nav className='hidden font-bold sm:flex justify-end space-x-10'>
          <NavLink to='/' className={({isActive}) =>
             isActive ? "text-red-500" : "text-black hover:text-rose-500" } >
          Home
          </NavLink>
          <NavLink to='/works' className={({isActive}) =>
             isActive ? "text-red-500" : "text-black hover:text-rose-500" } >
          Works
          </NavLink>
          <NavLink to='/blog' className={({isActive}) => 
          isActive ? "text-red-500" : "text-black hover:text-rose-500" } >
          Blog
          </NavLink>
          <NavLink to='/contact' className={({isActive}) => 
            isActive ? "text-red-500" : "text-black hover:text-rose-500"
           } >
          Contact
          </NavLink>
        </nav>

        <div onClick={() => setNav(!nav)} className='relative z-50'>
           <div className='flex justify-end mr-6'>
            <img 
            src={nav ? Cross : Hamburger}
            alt={nav ? "Close" : "Open"}
            className='h-8 w-8 cursor-pointer sm:hidden' />
           </div>
        </div>

        {nav && (
          <nav className='flex flex-col justify-center items-center fixed top-0 left-0
                      w-full h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-100
                      text-gray-800 space-y-8 text-2xl font-semibold z-40'>
            <Link to="/" onClick={() => setNav(false)} 
                  className='hover:text-rose-500 transition-colors'>
              Home
            </Link>
            <Link to="/works" onClick={() => setNav(false)}
                  className='hover:text-rose-500 transition-colors'>
              Works
            </Link>
            <Link to="/blog" onClick={() => setNav(false)}
                  className='hover:text-rose-500 transition-colors'>
              Blog
            </Link>
            <Link to="/contact" onClick={() => setNav(false)}
                  className='hover:text-rose-500 transition-colors'>
              Contact
            </Link>
          </nav>
        )}
    </div>
  );
}

export default Navbar