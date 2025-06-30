import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../assets/hamburger.png'
function handelClick(){
  
}
function Navbar()  {
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
        <div className=' flex justify-end mr-6 '>
          <img 
            onClick={handelClick}
            src={Hamburger} 
            alt=""
            className=' h-8 w-8 cursor-pointer sm:hidden' />
        </div>
        
    </div>
  );
}

export default Navbar