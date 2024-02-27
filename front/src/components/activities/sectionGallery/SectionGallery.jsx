import { NavLink } from "react-router-dom";

function SectionGallery({ activitiesImages }) {
  return (
    <div id="section-gallery-container" className="mt-10">
      <div id="gallery-title">
        <h2 className="text-[16px] font-medium text-[#280058]">Mis Fotos</h2>
      </div>
      <div
        id="photo-gallery-container"
        className="flex flex-wrap justify-center max-w-[360px] gap-5 mt-5"
      >
        {activitiesImages?.map((image, index) => (
          <div
            key={index}
            className="max-w-[150px] mt-5 border rounded-xl  shadow-[#67B7B3] shadow-sm"
            style={{ height: "350px" }}
          >
            <NavLink to={`galeria/${image.id}`}>
              <div className="border border-gray-200 rounded-lg overflow-hidden h-full">
                {/* Contenedor del título con altura fija */}
                <div className="p-4 h-[fit] flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold mb-2 mt-5 text-[#280058]">{image.title}</h3>
                  <p className="text-sm text-[#280058] mb-2">{image.date}</p>
                </div>
                {/* Imagen con padding */}
                <div className="p-1">
                  <img
                    alt="Actividad escolar"
                    className="object-cover w-full h-44 rounded-md"
                    src={image.imageURL}
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
