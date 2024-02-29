import { useLoaderData } from "react-router-dom";
import CurrentNotifications from "./currentNotifications/CurrentNotifications";
import HistoryNotifications from "./historyNotifications/HistoryNotifications";
import { useState } from "react";
import axios from "axios";

function NotificationContainer() {
  const notificationData = useLoaderData();
  const [notificationRead, setNotificationRead] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [notificationsData, setNotificationsData] = useState([]);

  console.log(notificationsData);

  return (
    <div className="max-w-[360px] pr-[16px] pl-[16px] bg-[#FDFBFF] ">
      <CurrentNotifications
        notificationsData={notificationData}
        setNotificationsData={setNotificationsData}
        setNotificationRead={setNotificationRead}
        setHistoryData={setHistoryData}
        historyData={historyData}
      />
      <HistoryNotifications historyData={historyData} />
    </div>
  );
}

export default NotificationContainer;

export const fetchDataNotification = async () => {
  try {
    const response = await axios.get("https://educlass-2024.onrender.com/api/notification");
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`La solicitud falló con el código de estado ${error.response.status}`);
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor');
    } else {
      console.error(`Ocurrió un error: ${error.message}`);
    }
    throw error;
  }
};
