//import { useState } from "react";
import { useParams } from "react-router-dom";
import { Image } from "@nextui-org/react";

function ActivityGallery() {
  const { id } = useParams();
  console.log(id);
  const activitiesImages = [
    {
      id: "01",
      title: "Excursión al Museo de Historia",
      imageURLs: [
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
      ],
    },
    {
      id: "02",
      title: "Feria de Ciencias",
      imageURLs: [
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
      ],
    },
    {
      id: "03",
      title: "Concurso de Ortografía",
      imageURLs: [
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
      ],
    },
    {
      id: "04",
      title: "Día del Deporte",
      imageURLs: [
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
      ],
    },
    {
      id: "05",
      title: "Festival de Arte",
      imageURLs: [
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
      ],
    },
    {
      id: "06",
      title: "Semana de la Lectura",
      imageURLs: [
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
      ],
    },
    {
      id: "07",
      title: "Obra de Teatro Escolar",
      imageURLs: [
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
      ],
    },
    {
      id: "08",
      title: "Actividad de Reciclaje",
      imageURLs: [
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
        "https://nextui.org/images/hero-card.jpeg",
      ],
    },
  ];

  const selectedPhoto = activitiesImages.find((image) => image.id === id);

  return (
    <div className="mr-[16px] ml-[16px]">
      {selectedPhoto && (
        <div className="flex flex-wrap justify-center">
          <h1>{selectedPhoto.title}</h1>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {selectedPhoto.imageURLs.map((url, index) => (
              <div key={index} className="mr-[8px] mb-[8px]">
                <Image
                  alt={`Actividad escolar ${index}`}
                  className="object-cover"
                  height={170}
                  src={url}
                  width={130}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
}

export default ActivityGallery;
