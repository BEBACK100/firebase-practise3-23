import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Components/Layout/MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'
import Login from './Components/Login/Login.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
