import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Attendance, Error, Home, Login, Notifications, Performance, Profile, Register } from './pages';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/asistencias',
        element: <Attendance />
      },
      {
        path: '/finanzas',
        element: <Performance />
      },
      {
        path: '/notificaciones',
        element: <Notifications />
      },
      {
        path: '/perfil',
        element: <Profile />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <Register />
  },
  {
    path: '*',
    element: <Error />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
