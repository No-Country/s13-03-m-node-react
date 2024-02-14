import { FaHome, FaCalendarCheck } from 'react-icons/fa';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { ImProfile } from 'react-icons/im';
import { MdLogin, MdNotificationAdd } from 'react-icons/md';
import { GrDocumentPerformance } from "react-icons/gr";

export const links = [
  {
    text: 'asistencia',
    path: 'attendance',
    icon: <FaCalendarCheck />,
  },
  {
    text: 'finanzas',
    path: 'finance',
    icon: <FaMoneyCheckDollar />,
  },
  {
    text: 'inicio',
    path: '.',
    icon: <FaHome />,
  },
  {
    text: 'login',
    path: 'login',
    icon: <MdLogin />,
  },
  {
    text: 'perfil',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'notificaciones',
    path: 'notifications',
    icon: <MdNotificationAdd />,
  },
  {
    text: 'rendimiento',
    path: 'performance',
    icon: <GrDocumentPerformance />,
  }
]