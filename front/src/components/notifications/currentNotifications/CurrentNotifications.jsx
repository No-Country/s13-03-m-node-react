//import { useState } from "react";
import React from "react";
import NotificationCard from "./NotificationCard";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const notificationsData = [
  {
    title: "Lorem ipsum dolor",
    date: "21 de febrero de 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
    readed: false,
  },
  {
    title: "Lorem ipsum dolor",
    date: "22 de febrero de 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
    readed: false,
  },
  {
    title: "Lorem ipsum dolor",
    date: "23 de febrero de 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
    readed: false,
  },
  {
    title: "Lorem ipsum dolor",
    date: "24 de febrero de 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
    readed: false,
  },
  {
    title: "Lorem ipsum dolor",
    date: "25 de febrero de 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
    readed: false,
  },
  {
    title: "Lorem ipsum dolor",
    date: "26 de febrero de 2024",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam omnis delectus itaque error veniam totam dicta enim magni incidunt, quibusdam blanditiis sint laborum, sequi molestias fugit modi neque aspernatur.",
    readed: false,
  },
];

function CurrentNotifications() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Filtros"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <div className="h-[50%] bg-slate-300">
      <div
        id="currentNotifications-header"
        className="flex justify-between items-center bg-slate-400"
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
              <NotificationCard key={index} notification={notification} />
            )
        )}
      </div>
    </div>
  );
}

export default CurrentNotifications;
