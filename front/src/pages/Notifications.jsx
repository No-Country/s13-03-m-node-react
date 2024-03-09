import { Helmet } from "react-helmet";
import NotificationContainer from "../components/notifications/NotificationContainer";


const Notifications = () => {
  return (
    <>
    <Helmet>
    <title>Mis notificaciones</title>
    <meta name="description" content="Notificaciones por parte del maestro o generales de la institución y su historial." />
    </Helmet>
    <div className="text-3xl flex justify-center ">
      <NotificationContainer />
    </div>
    </>
  );
};

export default Notifications;
