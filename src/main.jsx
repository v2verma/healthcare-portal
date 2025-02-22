import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

import { Layout } from './Layout.jsx'
import Login from './components/Login/Login.jsx'
import RegistrationForm from './components/Register/RegistrationForm.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: '',
      element: <App />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'signup',
      element: <RegistrationForm />
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
