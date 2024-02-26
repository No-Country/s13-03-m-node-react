import { Card, CardFooter, Image, Button, Link } from "@nextui-org/react";

function SectionGallery({ activitiesImages }) {
  return (
    <div id="section-gallery-container" className="mt-10">
      <div id="gallery-title">
        <h2>Fotos</h2>
      </div>
      <div
        id="photo-gallery-container"
        className="flex flex-wrap justify-center max-w-[360px] gap-5 mt-5"
      >
        {activitiesImages?.map((image, index) => (
          <Card
            key={index}
            isFooterBlurred
            radius="lg"
            className="border-none max-w-[130px] relative max-h-[150px]"
          >
            <Image
              alt="Actividad escolar"
              className="object-cover"
              height={170}
              src={image.imageURL}
              width={130}
            />
            <CardFooter className="flex flex-col justify-center border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-center">{image.title}</p>
              <Link href={`actividades/galeria/${image.id}`}>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Abrir
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SectionGallery;
