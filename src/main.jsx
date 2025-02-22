import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

import { Layout } from './Layout.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: '',
      element: <App />
    },
    {
      path: 'health',
      element: <div>health page coming soon..</div>
    },
    {
      path: '/service',
      element: <div>servce page coming soon..</div>
    },
    {
      path: '/contact',
      element: <div>Conatcts</div>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
