import { Image, Pagination, usePagination, PaginationItemType, PaginationItem, Button, Card } from "@nextui-org/react";
import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import { useState } from "react";
dayjs.locale("es");
import axios from "axios";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import diaBandera from "../assets/images/diaBandera.avif";
import diaProfesor from "../assets/images/diaProfesor.jpg"
import CardCalendar from "../components/CardCalendar";

export const loader = async () => {
  try {
    const data = await axios.get('https://educlass-2024.onrender.com/api/activity');
    return data
  } catch (error) {
   
  }
}
const CalendarPage = () => {
  const localizer = dayjsLocalizer(dayjs);
  const [handlerCarrusel, setHandlerCarrusel] = useState("false")
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useLoaderData();
  const { document } = data.data
  const activities = document.map((item) => (
    {
      start: dayjs(`${item.activityDate.split("-").reverse().join("-")}T${item.hourBegin}`).toDate(),
      end: dayjs(`${item.activityDate.split("-").reverse().join("-")}T${item.hourEnd}`).toDate(),
      title: `${item.title}`,
    }))
  {/* ejemplo
  start: dayjs("2024-02-23T12:00").toDate(),
  end: dayjs("2024-02-24T12:00.000").toDate(),
  title: "Primera prueba",
  id: "img1",
  src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
  */
  }


 
  const img1 = [
    {
      original: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      originalClass: "bg-[3FA3EB]",
      bulletClass: " border-2 border-rose-600 2",
      renderItem: () =>(<CardCalendar src={diaBandera} title={"Día de la Bandera"} subTitle={"20/06"} alt={"Día de la Bandera"} />)
    },
    {
      originalClass: "bg-[3FA3EB]",
      renderItem: () =>(<CardCalendar src={diaProfesor} title={"Día del Maestro"} subTitle={"11/09"} alt={"Día del Maestro"} />)
    },   
  ];


  return (
    <>
      <Helmet>
        <title>Mi calendario</title>
        <meta name="description" content="Podrás encontrar los días importantes y revisar el calendario." />
      </Helmet>
      <section className="flex flex-col  text-[#280058]    ">
        <h1 className=" mx-4  font-bold text-xl ">
          Días de importantes de mi escuela
        </h1>

        <ImageGallery
          items={img1}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}         
          showBullets={true}
        />

        <h2 className="mx-4 my-8 font-bold text-xl">Mi calendario</h2>
        <div className="w-auto h-96 self-center mb-8 p-4 mx-4 bg-[#F4FAFF] flex justify-center rounded-3xl	">
      
          <Calendar events={activities} localizer={localizer} className="w-80 " style={{width:300}}/>
        </div>

      </section>
    </>
  );
};
export default CalendarPage;
