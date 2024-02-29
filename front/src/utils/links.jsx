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
    icon: <IoMdNotificationsOutline size={24} />,
  },
  {
    text: 'Actividad escolar',
    path: 'actividades',
    icon: <SlNote size={20} />,
  },
  {
    text: 'Asistencias',
    path: 'asistencias',
    icon: <IoMdCheckboxOutline size={24} />,
  },
  {
    text: 'Calendario',
    path: 'calendario',
    icon: <CiCalendar size={24} />,
  },
  {
    text: 'Calificaciones',
    path: 'calificaciones',
    icon: <CiMedal size={24} />,
  },
  {
    text: 'Ayuda',
    path: 'ayuda',
    icon: <TfiHelpAlt size={24} />,
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