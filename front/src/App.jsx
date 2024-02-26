import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Activities, Attendance, Error, Home, Login, Notifications, Performance, Profile, Register, Grades } from './pages';
import { Absences, Attendances, Withdrawals } from './components/attendance';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/asistencias",
        element: <Attendance />,
      },
      {
        path: "/asistencias/asistencias",
        element: <Attendances />,
      },
      {
        path: "/asistencias/ausencias",
        element: <Absences />,
      },
      {
        path: "/asistencias/retiros",
        element: <Withdrawals />,
      },
      {
        path: "/finanzas",
        element: <Performance />,
      },
      {
        path: "/notificaciones",
        element: <Notifications />,
      },
      {
        path: '/perfil',
        element: <Profile />
      },
      {
        path: '/calificaciones',
        element: <Grades />
      },
      {
        path: "/actividades",
        element: <Activities />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
