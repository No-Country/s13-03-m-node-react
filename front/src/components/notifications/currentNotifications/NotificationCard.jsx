import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Checkbox,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { notificationsAction } from "../NotificationContainer";

function NotificationCard({
  index,
  notification,
  onCheckboxChange,
  setNotificationRead,
  setNotificationsReaded,
}) {
  const [isSelected, setIsSelected] = useState(notification.leido);

  useEffect(() => {});

  const handleCheckboxChange = async () => {
    setIsSelected(true);
    try {
      await notificationsAction(notification._id, { leido: true });
      setNotificationsReaded((prev) => [...(prev || []), notification]);
      setTimeout(() => {
        setIsSelected(false);
        onCheckboxChange(notification);
        setNotificationRead(true);
      }, 1000);
    } catch (error) {
      console.error("Error al actualizar la notificación:", error);
      setIsSelected(false);
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <Card
      key={index}
      className="max-w-[340px] mt-5 shadow-sm shadow-[#FCA044]"
      style={{
        backgroundColor: "rgba(252, 200, 68, 0.1)",
      }}
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <img
            radius="lg"
            size="md"
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 border-2 border-[#7828c8] rounded-lg "
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-[14px] font-bold leading-none text-[#280058]">
              {notification.titulo}
            </h4>
            <h5 className="text-[10px] font-medium mt-1 leading-snug tracking-none text-[#280058]">
              {formatDate(notification.fechaCreacion)}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p className="text-[14px] text-[#280058] bg-[#FDFBFF] p-4 rounded-lg">{notification.contenido}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex flex-col w-full justify-end align-top items-end text-[#280058]">
          <Checkbox
            labelStyle={{ color: "white" }}
            iconStyle={{ fill: "white" }}
            color="warning"
            labelColor="warning"
            /*isSelected={isSelected}*/
            /*onValueChange={handleCheckboxChange}*/
            className="text-[12px] text-[#280058]"
          >
            Leído
          </Checkbox>
          <p className="text-default-500"></p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default NotificationCard;
