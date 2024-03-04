import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Activities,
  Attendance,
  CalendarPage,
  Error,
  Home,
  Login,
  Notifications,
  Performance,
  Register,
  Grades,
} from "./pages";
import { Absences, Attendances, Withdrawals } from "./components/attendance";
import Layout from "./components/Layout";
import ActivitieGallery from "./components/activities/activitieGallery/ActivitieGallery";
import { notificationsLoader } from "./components/notifications/NotificationContainer";
import { loaders } from "./components/activities/ActivitiesContainer";

import Help from "./pages/Help";
import UserProfile from "./pages/Profile";
import { loader as loaderAttendance } from "./pages/Attendance";
import { activitiesGalleryLoader } from "./components/activities/activitieGallery/ActivitieGallery";

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
        loader: loaderAttendance,
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
        loader: notificationsLoader,
      },
      {
        path: "/perfil",
        element: <UserProfile />,
      },
      {
        path: "/calendario",
        element: <CalendarPage />,
      },
      {
        path: "/calificaciones",
        element: <Grades />,
      },
      {
        path: "/actividades",
        element: <Activities />,
        loader: loaders,
      },
      {
        path: "/actividades/galeria/:id",
        element: <ActivitieGallery />,
        loader: activitiesGalleryLoader,
      },
      {
        path: "/ayuda",
        element: <Help />,
      },
    ],
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
