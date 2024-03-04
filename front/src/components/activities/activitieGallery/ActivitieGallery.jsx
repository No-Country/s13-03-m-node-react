import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image } from "@nextui-org/react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const API_BASE = "https://educlass-2024.onrender.com/";
const API_IMAGES = "api/image";

export const activitiesGalleryLoader = async () => {
  try {
    const dataImage = await axios.get(`${API_BASE}${API_IMAGES}`);
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

function ActivityGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState([]);
  const [selectedPhotoTittle, setSelectedPhotoTittle] = useState();
  const [primaryImage, setPrimaryImage] = useState();
  const id = useParams();
  const dataImage = useLoaderData();

  useEffect(() => {
    setSelectedPhoto(
      dataImage.data.document.filter((image) => image.idActivity === id.id)
    );

    setSelectedPhotoTittle(
      dataImage.data.document.find((image) => image.idActivity === id.id).title
    );
  }, []);

  console.log(selectedPhoto[0]?.url);

  return (
    <div className="mr-[16px] ml-[16px]">
      <div className="flex flex-wrap justify-center">
        <h1 className="text-[#280058]">{selectedPhotoTittle}</h1>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          <div className="mr-[8px] mb-[8px]">
            <Image
              className="object-cover"
              height={170}
              src={primaryImage ? primaryImage.url : selectedPhoto[0]?.url}
              width={300}
            />
          </div>
          {selectedPhoto.map((image, index) => (
            <div key={index} className="mr-[8px] mb-[8px]">
              <Image
                alt={`Actividad escolar ${index}`}
                className="object-cover"
                height={170}
                src={image.url}
                width={130}
                onClick={() => setPrimaryImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityGallery;
