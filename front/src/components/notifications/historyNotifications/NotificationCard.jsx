import { useState } from "react";

function NotificationCard({ index, data }) {
  const [notificationOpen, setNotificationOpen] = useState(false);

  /*   function formatDate(dateString) {
    const [day, month, year] = dateString.split("/");
    const isoDateString = `${year}-${month}-${day}`;
    return isoDateString;
  } */

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div
      key={index}
      className="mt-2 rounded-lg overflow-hidden shadow-sm shadow-[#FCA044] bg-[#F9FAFB]"
    >
      <div className="relative">
        <div
          className={`cursor-pointer px-4 py-2 text-xs delay-75 ${
            notificationOpen ? "bg-transparent" : "bg-[#F9FAFB]"
          }`}
          onClick={() => setNotificationOpen(!notificationOpen)}
        >
          <div className="flex items-center gap-2 justify-between">
            <span>{formatDate(data.fechaCreacion)}</span>
            <span>
              {notificationOpen ? " " : data.contenido.substr(0, 50) + "..."}
            </span>
            <span className="flex min-w-fit">
              {notificationOpen ? " " : "Ver más"}
            </span>
          </div>
        </div>
        {notificationOpen && (
          <div className="px-4 py-2 text-xs">{data.contenido}</div>
        )}
      </div>
    </div>
  );
}

export default NotificationCard;
