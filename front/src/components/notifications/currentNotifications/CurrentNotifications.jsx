import { useState, useMemo } from "react";
import NotificationCard from "./NotificationCard";
import { MdKeyboardArrowDown } from "react-icons/md";

function CurrentNotifications({
  notificationsData,
  setNotificationRead,
  setNotificationsData,
  setHistoryData,
  historyData,
}) {
  const [selectedValue, setSelectedValue] = useState("Filtros");
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedValue(item);
    setIsOpen(false);
  };

  const filteredNotifications = useMemo(() => {
    if (selectedValue === "Filtros" || selectedValue === "Todas") {
      return notificationsData;
    } else if (selectedValue === "Institucionales") {
      return notificationsData.filter(
        (notification) => notification.type === "institucional"
      );
    } else if (selectedValue === "Mi grado") {
      return notificationsData.filter(
        (notification) => notification.type === "Mi grado"
      );
    }
    return [];
  }, [notificationsData, selectedValue]);

  const handleCheckboxChange = (notification) => {
    setNotificationsData(
      notificationsData.filter((item) => item !== notification)
    );
    setHistoryData([...historyData, notification]);
  };

  return (
    <div className="text-[#280058]">
      <div
        id="currentNotifications-header"
        className="flex justify-between items-center"
      >
        <div id="currentNotifications-title-container">
          <h1 className="text-[20px] font-bold">Mis Notificaciones</h1>
        </div>
        <div
          id="currentNotifications-filter-container"
          className="justify-center content-center align-middle relative inline-block bg-[#FDFBFF]"
        >
          <button
            className="capitalize bg-[#FDFBFF] text-[#280058] font-bold px-4 py-2 flex items-center justify-between text-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedValue}
            <MdKeyboardArrowDown className={`h-6 w-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div className="absolute z-50 right-0 mt-2 w-56 bg-white rounded shadow-md text-sm">
              <ul>
                <li className="bg-[#FDFBFF]">
                  <button
                    className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left"
                    onClick={() => handleItemClick("Institucionales")}
                  >
                    Institucionales
                  </button>
                </li>
                <li>
                  <button
                    className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left"
                    onClick={() => handleItemClick("Mi grado")}
                  >
                    Mi grado
                  </button>
                </li>
                <li>
                  <button
                    className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left"
                    onClick={() => handleItemClick("Todas")}
                  >
                    Todas
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div id="currentNotifications-cards">
        {filteredNotifications.map(
          (notification, index) =>
            !notification.readed &&
            index >= filteredNotifications.length - 3 && (
              <NotificationCard
                key={index}
                notification={notification}
                setNotificationRead={setNotificationRead}
                onCheckboxChange={handleCheckboxChange}
              />
            )
        )}
      </div>
    </div>
  );
}

export default CurrentNotifications;
