import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Attendance, Error, Home, Login, Notifications, Performance, Profile, Register } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/attendance',
    element: <Attendance />
  },
  {
    path: '*',
    element: <Error />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/notifications',
    element: <Notifications />
  },
  {
    path: '/performance',
    element: <Performance />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/register',
    element: <Register />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
