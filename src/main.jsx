import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

import store from './store/store.js'
import { Layout } from './Layout.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import Login from './components/Login/Login.jsx'
import RegistrationForm from './components/Register/RegistrationForm.jsx'
import PatientDashboard from './components/PatientDashboard/PatientDashboard.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: (<Layout />),
  children: [
    {
      path: '',
      element: (<AuthLayout authentication={false}><PatientDashboard /></AuthLayout>)
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
      element: (<AuthLayout authentication={false}><div>Conatcts</div></AuthLayout>)
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
