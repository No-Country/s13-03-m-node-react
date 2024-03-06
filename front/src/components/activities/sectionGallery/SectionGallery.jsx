import { NavLink } from "react-router-dom";

function SectionGallery({ activitiesImages }) {/* 
  function formatDate(dateString) {
    const [day, month] = dateString.split("-");
    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}`;
  } */

  return (
    <div id="section-gallery-container" className="mt-10 mb-10">
      <div id="gallery-title">
        <h2 className="text-[16px] font-medium text-[#280058]">Mis Fotos</h2>
      </div>
      <div
        id="photo-gallery-container"
        className="flex flex-wrap justify-center max-w-[360px] gap-5 mt-5"
      >
        {activitiesImages
          .filter((image) => image.isPortada === true)
          .map((image, index) => (
            <div
              key={index}
              className="mt-5 border rounded-xl shadow-[#67B7B3] shadow-sm flex flex-col"
              style={{ width: "154px" }}
            >
              <NavLink to={`galeria/${image.idActivity}`}>
                <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between h-full">
                  <div className="pl-1 flex flex-col justify-center items-center">
                    <h3 className="font-bold mb-2 mt-2 min-h-[fit] h-[60px] text-[#280058]">
                      {image.title}
                    </h3>
                    {/*                     <p className="text-sm text-[#280058] min-h-[fit] h-[50px] mt-5 mb-[-15px] justify-start text-start">
                      {formatDate(image.creationDate)}
                    </p> */}
                  </div>
                  <div className="pb-2 flex justify-center items-center">
                    <img
                      alt="Actividad escolar"
                      className="object-cover h-40 w-[135px] rounded-md"
                      src={image.url}
                    />
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SectionGallery;
