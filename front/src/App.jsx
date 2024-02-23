import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Attendance, Calendar, Error, Home, Login, Notifications, Performance, Profile, Register } from './pages';
import Layout from './components/Layout';
import { Absences, Attendances, Withdrawals } from './components/attendance';

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
        element: <Attendance />,
      },
      {
        path: '/asistencias/asistencias',
        element: <Attendances />
      },
      {
        path: '/asistencias/ausencias',
        element: <Absences />
      },
      {
        path: '/asistencias/retiros',
        element: <Withdrawals />
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
      },
      {
        path: '/calendario',
        element: <Calendar />
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
