import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Work from './pages/Work.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout.jsx';
import Contact from './pages/Contact.jsx';
const router = createBrowserRouter([
    { path : '/',
      element : <RootLayout/>,
      children : [
        {
          path : "",
          element : <Home/>
        },
        {
      path : '/blog',
      element : <Blog/>
    },
    {
      path : '/Works',
      element : <Work/>
    },
    ,{
      path : '/contact',
      element : <Contact/>
    }
      ]

    }
    
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
