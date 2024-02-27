import { useState, useMemo } from "react";
import NotificationCard from "./NotificationCard";
import { MdKeyboardArrowDown } from "react-icons/md";

function HistoryNotifications({ historyData }) {
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
    if (selectedKeys.has("Filtros") || selectedKeys.has("todas")) {
      return historyData;
    } else if (selectedKeys.has("institucional")) {
      return historyData.filter(
        (notification) => notification.type === "institucional"
      );
    } else if (selectedKeys.has("Mi grado")) {
      return historyData.filter(
        (notification) => notification.type === "Mi grado"
      );
    }
    return [];
  }, [historyData, selectedKeys]);

  return (
    <>
      {historyData.length > 0 && (
        <div className="text-[#280058] mt-10">
          <div
            id="historyNotifications-header"
            className="flex justify-between items-center"
          >
            <div id="historyTitle-container">
              <h2 className="text-xl">Historial de notificaciones</h2>
            </div>
            <div
              id="historyFilter-container"
              className="justify-center content-center align-middle relative inline-block bg-[#FDFBFF]"
            >
              <button
                className="capitalize bg-[#FDFBFF] text-[#280058] font-bold px-4 py-2 flex items-center justify-between text-sm"
                onClick={toggleDropdown}
              >
                {selectedValue}
                <MdKeyboardArrowDown
                  className={`h-6 w-6 transition-transform transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-50 right-0 mt-2 w-56 bg-white rounded shadow-md text-sm">
                  <ul className="py-1">
                    <button
                      className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left"
                      onClick={() => handleDropdownItemClick("institucional")}
                    >
                      Institucionales
                    </button>
                    <button
                      className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left"
                      onClick={() => handleDropdownItemClick("Mi grado")}
                    >
                      Mi grado
                    </button>
                    <button
                      className="hover:bg-[#FCA044] block px-4 py-2 text-[#280058] font-bold w-full text-left"
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
            {filteredNotifications.map((data, index) => (
              <NotificationCard key={index} data={data} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HistoryNotifications;
