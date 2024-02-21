import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Checkbox,
} from "@nextui-org/react";
import { useState } from "react";

function NotificationCard({ index, notification, onCheckboxChange,setNotificationRead }) {
  const [isSelected, setIsSelected] = useState(notification.read);

  const handleCheckboxChange = () => {
    setIsSelected(true);
    onCheckboxChange(notification);
    setNotificationRead(true)
  };

  return (
    <Card key={index} className="max-w-[340px] mt-5">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {notification.title}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {notification.date}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{notification.content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex flex-col w-full justify-end align-top items-end">
          <Checkbox
            isSelected={isSelected}
            onValueChange={handleCheckboxChange}
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
