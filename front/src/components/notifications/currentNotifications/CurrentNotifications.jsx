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
              <DropdownItem key="number">Institucionales</DropdownItem>
              <DropdownItem key="date">Mi grado</DropdownItem>
              <DropdownItem key="single_date">Todas</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div id="currentNotifications-cards">
        {notificationsData.map(
          (notification, index) =>
            !notification.readed &&
            index >= notificationsData.length - 3 && (
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
