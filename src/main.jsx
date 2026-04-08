import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { route } from './Routes/Routes'
import APIContext from './API Context/APIContext'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIContext>
      <RouterProvider router={route} />
      <ToastContainer />
    </APIContext>
  </StrictMode>,
)
