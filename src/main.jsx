import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Admin/Layout'
import './index.css'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import Ebook from './components/Admin/Ebook/Ebook'
import Setting from './components/Admin/Setting/Setting'

const router = createBrowserRouter([
  {
    path: 'admin',
    Component: Layout,
    children: [
      {
        path: 'dashboard',
        Component : Dashboard
      },
      {
        path: 'ebook',
        Component : Ebook
      },
      {
        path: 'setting',
        Component : Setting
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
