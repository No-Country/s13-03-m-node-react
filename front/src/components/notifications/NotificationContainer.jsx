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

// eslint-disable-next-line react-refresh/only-export-components
export const notificationsAction = async (notificationId, data) => {
  try {
    const { dataID } = await axios.put(
      `${API_BASE}${API_NOTIFICATIONS}/${notificationId}`,
      data
    );
    window.location.reload();
    return dataID;
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
  const [notificationsReaded, setNotificationsReaded] = useState();
  const [historyData, setHistoryData] = useState([]);

  //setNotificationsData()
  console.log(data.document);

  return (
    <div className="max-w-[360px] pr-[16px] pl-[16px] bg-[#FDFBFF] ">
      <CurrentNotifications
        notificationsData={data.document}
        setHistoryData={setHistoryData}
        historyData={historyData}
        setNotificationsReaded={setNotificationsReaded}
      />
      <HistoryNotifications notificationsData={data.document} />
    </div>
  );
}

export default NotificationContainer;
