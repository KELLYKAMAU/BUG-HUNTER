import './App.css'
import UserLogin from './components/auth/Userlogin'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import { Admindashboard } from './components/Admin dashboard/Aside/Aside/Dashboard'
import Landing from './components/Landing'
import Register from './components/auth/Register'
import Services from './components/Services/Services'


function App() {
  const router = createBrowserRouter([
    {
     path: '/',
     element: <Landing/>
    },
    {
      path: '/about',
      element: <About />
    },
   
    {
      path: '/userLogin',
      element: <UserLogin />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/admin/dashboard',
      element: <Admindashboard />
    },

     {
      path: '/Services',
      element: <Services />
    },

      {
      path: '/contact',
      element: <Contact />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
