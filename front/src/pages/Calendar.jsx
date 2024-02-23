import {
  Image,
} from "@nextui-org/react";
import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarPage = () => {
  const localizer = dayjsLocalizer(dayjs)
  return (
    <section className="flex flex-col    ">
      <h1 className="mx-4 mb-8 font-medium text-2xl ">Días de importantes de mi escuela</h1>
      <Image
                    className="self-center" 
                    width={300}
                    alt="NextUI hero Image"
                    src= "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
      <h2 className="mx-4  font-medium text-2xl  ">Mi calendario</h2>
      <Calendar
      localizer={localizer}
       style={{ height: 500, width:500 }}/>
    
                
                  
           

    </section>
  );
};
export default CalendarPage;
