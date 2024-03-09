import { useState, useMemo } from "react";
import NotificationCard from "./NotificationCard";
import { MdKeyboardArrowDown } from "react-icons/md";

function HistoryNotifications({ notificationsData }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Filtros"]));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (key) => {
    setSelectedKeys(new Set([key]));
    setIsDropdownOpen(false);
  };

  const filteredNotifications = useMemo(() => {
    if (selectedValue === "Filtros" || selectedValue === "todas") {
      return notificationsData;
    } else if (selectedValue === "Institucionales") {
      return notificationsData.filter(
        (notification) => notification.tipo === "general"
      );
    } else if (selectedValue === "Personales") {
      return notificationsData.filter(
        (notification) => notification.tipo === "alumno"
      );
    }
    return [];
  }, [notificationsData, selectedKeys]);

  return (
    <>
      <div className="text-[#280058] mt-10 mb-10">
        <div
          id="historyNotifications-header"
          className="flex justify-between items-center"
        >
          <div id="historyTitle-container">
            <h2 className="text-[20px] ">Historial de notificaciones</h2>
          </div>
          <div
            id="historyFilter-container"
            className="justify-center content-center align-middle relative inline-block bg-[#FDFBFF]"
          >
            <button
              className="capitalize bg-[#FDFBFF] text-[#280058] font-bold py-2 flex items-center justify-between text-[14px]"
              onClick={toggleDropdown}
            >
              {selectedValue}
              <MdKeyboardArrowDown
                className={`h-6 w-6 transition-transform transform ${isDropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="filterBox absolute z-50 right-0 mt-2 w-56 bg-white rounded shadow-md text-sm">
                <ul className="py-1">
                  <button
                    className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left  text-[14px]"
                    onClick={() => handleDropdownItemClick("Institucionales")}
                  >
                    Institucionales
                  </button>
                  <button
                    className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left  text-[14px]"
                    onClick={() => handleDropdownItemClick("Personales")}
                  >
                    Personales
                  </button>
                  <button
                    className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left  text-[14px]"
                    onClick={() => handleDropdownItemClick("todas")}
                  >
                    Todas
                  </button>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div id="historyCards-container">
          {filteredNotifications?.length > 0 ? (
            filteredNotifications
              .filter((notification) => notification.leido === true)
              .map((data, index) => (
                <NotificationCard key={index} data={data} />
              ))
          ) : (
            <p className="text-sm text-center text-[#280058] mt-4">
              No hay notificaciones
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default HistoryNotifications;
