import CurrentNotifications from "./currentNotifications/CurrentNotifications";
import HistoryNotifications from "./historyNotifications/HistoryNotifications";
import { useState } from "react";

function NotificationContainer() {
  const [notificationRead, setNotificationRead] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [notificationsData, setNotificationsData] = useState([
    {
      title: "Lorem ipsum dolor",
      date: "21 de febrero de 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
      readed: notificationRead,
      type: "institucional",
    },
    {
      title: "Lorem ipsum dolor",
      date: "22 de febrero de 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
      readed: notificationRead,
      type: "institucional",
    },
    {
      title: "Lorem ipsum dolor",
      date: "23 de febrero de 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
      readed: notificationRead,
      type: "mi-grado",
    },
    {
      title: "Lorem ipsum dolor",
      date: "24 de febrero de 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
      readed: notificationRead,
      type: "mi-grado",
    },
    {
      title: "Lorem ipsum dolor",
      date: "25 de febrero de 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
      readed: notificationRead,
      type: "mi-grado",
    },
    {
      title: "Lorem ipsum dolor",
      date: "26 de febrero de 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
      type: "mi-grado",
    },
  ]);

  return (
    <div className="max-w-[360px] pr-[16px] pl-[16px]">
      <CurrentNotifications
        notificationsData={notificationsData}
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
