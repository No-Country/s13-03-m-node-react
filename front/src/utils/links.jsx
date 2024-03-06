import { SlNote } from "react-icons/sl";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiCalendar, CiMedal } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";

export const links = [
  {
    text: 'Notificaciones',
    path: 'notificaciones',
    icon: <RiNotification2Line size={22} />,
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
    icon: <TfiHelpAlt size={22} />,
  },
]