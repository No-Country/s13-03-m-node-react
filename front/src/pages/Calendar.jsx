import { Image, Pagination, usePagination, PaginationItemType,PaginationItem, Button} from "@nextui-org/react";
import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import { useState } from "react";
dayjs.locale("es");
const CalendarPage = () => {
  const localizer = dayjsLocalizer(dayjs);
  const [handlerCarrusel, setHandlerCarrusel]= useState("false")
  const [currentPage, setCurrentPage] = useState(1);

  const events = [
    {
      start: dayjs("2024-02-23T12:00.000").toDate(),
      end: dayjs("2024-02-24T12:00.000").toDate(),
      title: "Primera prueba",
      id: "img1",
      src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      
    },
    {
      start: dayjs("2024-02-25T12:00.000").toDate(),
      end: dayjs("2024-02-25T12:00.000").toDate(),
      title: "Segunda prueba",
      id: "img2",
      src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    
    },
  ];
  const img = [
    {
      id: "img1",
      src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: "img2",
      src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: "img3",
      src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: "img4",
      src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: "img5",
      src: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
  ];
 
  
  return (
   
    <section className="flex flex-col  text-[#280058]    ">
      <h1 className="mx-4 mb-8  font-bold text-xl ">
        Días de importantes de mi escuela
      </h1>
      <div className="flex overflow-x-auto">
        {img.map((item) => (
          <img
            key={item.id}
            src={item.src}
            className=" rounded-lg m-2 min-[320px]:w-1/2 md:w-1/3 lg:w-1/4"
          />
          
        ))
        
        }
      </div>
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
        <Calendar events={events} localizer={localizer} />
      </div>
      <Pagination  showControls color="success"  initialPage={1}  
        onChange={setCurrentPage}/>
      
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Previous
        </Button>
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
        >
          Next
        </Button>
    </section>

  );
};
export default CalendarPage;
