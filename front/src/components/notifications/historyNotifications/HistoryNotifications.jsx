import NotificationCard from "./NotificationCard";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useMemo } from "react";

function HistoryNotifications({ historyData }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Filtros"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

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
      {historyData.length > 0 ? (
        <div>
          <div
            id="historyNotifications-header"
            className="flex justify-between items-center"
          >
            <div id="historyTitle-container">
              <h2 className="text-xl">Historial de notificaciones</h2>
            </div>
            <div
              id="historyFilter-container"
              className="justify-center  content-center align-middle"
            >
              <Dropdown>
                <DropdownTrigger>
                  <Button className="capitalize bg-transparent">
                    {selectedValue}
                    <MdKeyboardArrowDown />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                >
                  <DropdownItem key="institucional">
                    Institucionales
                  </DropdownItem>
                  <DropdownItem key="Mi grado">Mi grado</DropdownItem>
                  <DropdownItem key="todas">Todas</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div id="historyCards-container">
            {filteredNotifications?.map((data, index) => (
              <NotificationCard key={index} data={data} />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default HistoryNotifications;