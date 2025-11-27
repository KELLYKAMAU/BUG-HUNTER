import './App.css'
import UserLogin from './components/auth/Userlogin'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import LandingPage from './components/Landingpage'
// import About from './components/'
import Contact from './components/contact/Contact'
import Registration from './components/auth/registration'
import { Admindashboard } from './components/Admin dashboard/Aside/Aside/Dashboard'
function App() {
  const router = createBrowserRouter([
    {
     path: '/',
     element: <LandingPage />
    },
    // {
    //   path: '/about',
    //   element: <About />
    // },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/userLogin',
      element: <UserLogin />
    },
    {
      path: '/register',
      element: <Registration />
    },
    {
      path: '/admin/dashboard',
      element: <Admindashboard />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
