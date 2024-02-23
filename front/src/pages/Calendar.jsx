import { Image } from "@nextui-org/react";
import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
dayjs.locale("es");
const CalendarPage = () => {
  const localizer = dayjsLocalizer(dayjs);
  const events = [
    {
      start: dayjs("2024-02-23T12:00.000").toDate(),
      end: dayjs("2024-02-24T12:00.000").toDate(),
      title: "Primera prueba",
    },
    {
      start: dayjs("2024-02-25T12:00.000").toDate(),
      end: dayjs("2024-02-25T12:00.000").toDate(),
      title: "Segunda prueba",
    },
  ];
  return (
    <section className="flex flex-col    ">
      <h1 className="mx-4 mb-8 font-medium text-2xl ">
        Días de importantes de mi escuela
      </h1>
      <Image
        className="self-center"
        width={300}
        alt="NextUI hero Image"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />
      <h2 className="mx-4 my-8 font-medium text-2xl  ">Mi calendario</h2>
      <div className="w-5/6 h-96 self-center mb-8">
        {/* es mejor darle un tamaño determinado a la calendar que el dinamico
            Menos de 340 se rompe
        */}
        <Calendar events={events} localizer={localizer} />
      </div>
    </section>
  );
};
export default CalendarPage;
