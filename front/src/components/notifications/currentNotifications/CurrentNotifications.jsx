import { useState, useMemo } from "react";
import NotificationCard from "./NotificationCard";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdKeyboardArrowDown } from "react-icons/md";

function CurrentNotifications({
  notificationsData,
  setNotificationRead,
  setNotificationsData,
  setHistoryData,
  historyData,
}) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Filtros"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleCheckboxChange = (notification) => {
    setNotificationsData(
      notificationsData.filter((item) => item !== notification)
    );
    setHistoryData([...historyData, notification]);
  };

  const filteredNotifications = useMemo(() => {
    if (selectedKeys.has("Filtros") || selectedKeys.has("todas")) {
      return notificationsData;
    } else if (selectedKeys.has("institucional")) {
      return notificationsData.filter(
        (notification) => notification.type === "institucional"
      );
    } else if (selectedKeys.has("Mi grado")) {
      return notificationsData.filter(
        (notification) => notification.type === "Mi grado"
      );
    }
    return [];
  }, [notificationsData, selectedKeys]);

  return (
    <div className="">
      <div
        id="currentNotifications-header"
        className="flex justify-between items-center"
      >
        <div id="currentNotifications-title-container">
          <h1 className="text-xl">Mis Notificaciones</h1>
        </div>
        <div
          id="currentNotifications-filter-container"
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
              <DropdownItem key="institucional">Institucionales</DropdownItem>
              <DropdownItem key="Mi grado">Mi grado</DropdownItem>
              <DropdownItem key="todas">Todas</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
