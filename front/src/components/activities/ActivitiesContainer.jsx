import SectionActivities from "./sectionActivities/SectionActivities";
import SectionGallery from "./sectionGallery/SectionGallery";
import UrgentNotifications from "./urgentNotifications/UrgentNotifications";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const API_BASE = "https://educlass-2024.onrender.com/";
const API_ACTIVITIES = "api/activity";
const API_IMAGES = "api/image";

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
    const dataImage = await axios.get(`${API_BASE}${API_IMAGES}`);
    //console.log(dataImage);
    return dataImage.data;
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

export const loaders = async () => {
  return Promise.all([activitiesLoader(), activitiesGalleryLoader()]);
};
function ActivitiesContainer() {
  const [data, dataImage] = useLoaderData();

  return (
    <div className="mr-[16px] ml-[16px]">
      <SectionActivities
        activitiesData={data.data.document}
      />
      <UrgentNotifications />
      <SectionGallery
        activitiesImages={dataImage.data.document}
      />
    </div>
  );
}

export default ActivitiesContainer;
