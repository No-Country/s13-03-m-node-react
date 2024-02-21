import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function CardAcademicPath({ academicPathInfo }) {
  return (
    <Card className="py-4 h-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{academicPathInfo.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://storiesv2.nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

export default CardAcademicPath;
