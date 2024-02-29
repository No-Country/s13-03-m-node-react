import { useLoaderData } from "react-router-dom";
import CurrentNotifications from "./currentNotifications/CurrentNotifications";
import HistoryNotifications from "./historyNotifications/HistoryNotifications";
import { useState } from "react";
import axios from "axios";

const API_BASE = "https://educlass-2024.onrender.com/";
const API_NOTIFICATIONS = "api/notification";

// eslint-disable-next-line react-refresh/only-export-components
export const notificationsLoader = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}${API_NOTIFICATIONS}`);
    return data;
  } catch (error) {
    if (error.response) {
      console.error(
        `La solicitud falló con el código de estado ${error.response.status}`
      );
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor");
    } else {
      console.error(`Ocurrió un error: ${error.message}`);
    }
    throw error;
  }
};

function NotificationContainer() {
  const { data } = useLoaderData();
  const [notificationRead, setNotificationRead] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [notificationsData, setNotificationsData] = useState([]);

  //setNotificationsData()
  console.log(data.document);

  return (
    <div className="max-w-[360px] pr-[16px] pl-[16px] bg-[#FDFBFF] ">
      <CurrentNotifications
        notificationsData={data.document}
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
