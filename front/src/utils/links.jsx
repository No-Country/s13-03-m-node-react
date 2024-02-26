import { SlNote } from "react-icons/sl";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoMdNotificationsOutline, IoMdCheckboxOutline } from "react-icons/io";
import { CiCalendar, CiMedal } from "react-icons/ci";

export const links = [
  // {
  //   text: 'inicio',
  //   path: '.',
  //   icon: <FaHome />,
  // },
  {
    text: 'Notificaciones',
    path: 'notificaciones',
    icon: <IoMdNotificationsOutline />,
  },
  {
    text: 'Actividad escolar',
    path: 'activities',
    icon: <SlNote />,
  },
  {
    text: 'Asistencias',
    path: 'asistencias',
    icon: <IoMdCheckboxOutline />,
  },
  {
    text: 'Calendario',
    path: 'calendario',
    icon: <CiCalendar />,
  },
  {
    text: 'Calificaciones',
    path: 'calificaciones',
    icon: <CiMedal />,
  },
  {
    text: 'Ayuda',
    path: 'ayuda',
    icon: <TfiHelpAlt />,
  },
  // {
  //   text: 'perfil',
  //   path: 'profile',
  //   icon: <ImProfile />,
  // },
  // {
  //   text: 'login',
  //   path: 'login',
  //   icon: <MdLogin />,
  // },
]