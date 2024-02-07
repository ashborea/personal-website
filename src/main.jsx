import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path: '/projets',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contact />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
