import { useState } from "react";
import SectionActivities from "./sectionActivities/SectionActivities";
import SectionGallery from "./sectionGallery/SectionGallery";
import UrgentNotifications from "./urgentNotifications/UrgentNotifications";

function ActivitiesContainer() {
  const [activitiesImages, setActivitiesImages] = useState([
    {
      title: "Excursión al Museo de Historia",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      title: "Feria de Ciencias",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      title: "Concurso de Ortografía",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      title: "Día del Deporte",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      title: "Festival de Arte",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      title: "Semana de la Lectura",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      title: "Obra de Teatro Escolar",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      title: "Actividad de Reciclaje",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
  ]);
  const [activitiesData, setActivitiesData] = useState([
    {
      id: "001",
      title: "Examen de Matemáticas",
      date: "2024-02-28",
      schedule: "9:00 AM",
    },
    {
      id: "002",
      title: "Proyecto de Ciencias",
      date: "2024-03-15",
      schedule: "10:30 AM",
    },
    {
      id: "003",
      title: "Excursión Museo de Historia Natural",
      date: "2024-03-25",
      schedule: "8:30 AM",
    },
    {
      id: "004",
      title: "Feria de Ciencias",
      date: "2024-05-10",
      schedule: "9:00 AM",
    },
    {
      id: "005",
      title: "Acto",
      date: "2024-06-15",
      schedule: "7:00 PM",
    },
    {
      id: "006",
      title: "Concierto de Fin de Año",
      date: "2024-12-15",
      schedule: "9:00 PM",
    },
  ]);
  return (
    <div className="mr-[16px] ml-[16px]">
      <SectionActivities
        activitiesData={activitiesData}
        setActivitiesData={setActivitiesData}
      />
      <UrgentNotifications />
      <SectionGallery
        activitiesImages={activitiesImages}
        setActivitiesImages={setActivitiesImages}
      />
    </div>
  );
}

export default ActivitiesContainer;
