import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Checkbox,
} from "@nextui-org/react";
//import { useState } from "react";

function UrgentNotifications() {
  //const [selectedKeys, setSelectedKeys] = useState(new Set(["Filtros"]));

  /* const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );*/
  return (
    <div id="urgent-notification-container" className="mt-10">
      <div id="urgent-notification-title">
        <h2>Notificaciones urgentes</h2>
      </div>
      <div id="urgentNotification-card">
        <Card /*key={index}*/ className="max-w-[340px] mt-5">
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
                  Excursion Museo de Historia
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  Ajuste de horario
                </h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>Estimados Padres,</p>
            <p>
              Les informamos que la hora de regreso de la excursión al Museo de
              Historia ha sido ajustada. El nuevo horario de retorno al colegio
              será a las 06:30 PM. Agradecemos su comprensión.
            </p>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex flex-col w-full justify-end align-top items-end">
              <Checkbox
              /*isSelected={isSelected}
                onValueChange={handleCheckboxChange}*/
              >
                Leído
              </Checkbox>
              <p className="text-default-500"></p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default UrgentNotifications;