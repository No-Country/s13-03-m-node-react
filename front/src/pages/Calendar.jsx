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
      renderItem: () =>
      (
        <Card className="flex flex-col items-start gap-2 h-44 w-1/2		 px-3 pt-1   mx-auto   mt-5 mb-10">
          <h1 className=" my-4 ">Dia de la bandera</h1>
          <h1 className="mb-4 ">Fecha</h1>
          <div className=" w-full flex  justify-center items-center">
            <Image className="h-[5.563rem] " src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" alt="MDN" />
          </div>
        </Card>)

    },
    {
      original: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      original: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      renderItem: () =>
        <div className="bg-[3FA3EB]">
          <p className="absolute bg-black text-white">hola</p>
          <img src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" alt="MDN" />
        </div>
    },
    {
      original: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      description: "adsdas"
    },
  ];


  return (
    <>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <section className="flex flex-col  text-[#280058]    ">
        <h1 className="  font-bold text-xl ">
          Días de importantes de mi escuela
        </h1>

        <ImageGallery
          items={img1}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          showNav={false}
          showBullets={true}
        />

        {/* Da problemas por ser responsive se achica demaciado impidiendo el overflow
     <Image
        className="self-center"
        width={300}
        alt="NextUI hero Image"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
  />*/}
        <h2 className="mx-4 my-8 font-bold text-xl">Mi calendario</h2>
        <div className="w-5/6 h-96 self-center mb-8">
          {/* es mejor darle un tamaño determinado a la calendar que el dinamico
            Menos de 340 se rompe
        */}
          <Calendar events={activities} localizer={localizer} />
        </div>

      </section>
    </>
  );
};
export default CalendarPage;
