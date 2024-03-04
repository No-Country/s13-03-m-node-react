import { useState } from "react";
import SectionActivities from "./sectionActivities/SectionActivities";
import SectionGallery from "./sectionGallery/SectionGallery";
import UrgentNotifications from "./urgentNotifications/UrgentNotifications";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const API_BASE = "https://educlass-2024.onrender.com/";
const API_ACTIVITIES = "api/activity";
const API_IMAGES = "api/activity";

export const activitiesLoader = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}${API_ACTIVITIES}`);
    return data;
  } catch (error) {
    if (error.response) {
      console.error(
        `La solicitud falló con el código de estado ${error.response.status}`
      );
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor");
    } else {
      console.error(`Ocurrió un error: ${error.message}`);
    }
    throw error;
  }
};

export const activitiesGalleryLoader = async () => {
  try {
    const { dataImage } = await axios.get(`${API_BASE}${API_IMAGES}`);
    return dataImage;
  } catch (error) {
    if (error.response) {
      console.error(
        `La solicitud falló con el código de estado ${error.response.status}`
      );
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor");
    } else {
      console.error(`Ocurrió un error: ${error.message}`);
    }
    throw error;
  }
};

function ActivitiesContainer() {
  const { data} = useLoaderData();
  
  const [activitiesImages, setActivitiesImages] = useState([
    {
      id:'01',
      title: "Excursión al Museo de Historia",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      id:'02',
      title: "Feria de Ciencias",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      id:'03',
      title: "Concurso de Ortografía",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      id:'04',
      title: "Día del Deporte",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      id:'05',
      title: "Festival de Arte",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      id:'06',
      title: "Semana de la Lectura",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      id:'07',
      title: "Obra de Teatro Escolar",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      id:'08',
      title: "Actividad de Reciclaje",
      imageURL: "https://nextui.org/images/hero-card.jpeg",
    },
  ]);
  //const [activitiesData, setActivitiesData] = useState({data});
  return (
    <div className="mr-[16px] ml-[16px]">
      <SectionActivities
        activitiesData={data.document}
        //setActivitiesData={setActivitiesData}
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
