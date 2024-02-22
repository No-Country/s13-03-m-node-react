import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";

function NotificationCard({ index, data }) {
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <div key={index} className="mt-2">
      <Accordion variant="splitted">
        <AccordionItem
          key={data.id}
          indicator={notificationOpen ? " " : "Ver más"}
          aria-label="Accordion 1"
          startContent={data.date}
          subtitle={data.title}
          className={`text-xs delay-75 ${
            notificationOpen ? "bg-transparent" : "bg-current"
          }`}
          onPress={() => setNotificationOpen(!notificationOpen)}
        >
          {data.content}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default NotificationCard;
