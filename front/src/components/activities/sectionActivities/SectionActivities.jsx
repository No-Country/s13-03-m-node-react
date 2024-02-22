import {
  Card,
  CardHeader,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react";

function SectionActivities({ activitiesData }) {
  const currentDate = new Date();
  const threeMonthsFromNow = new Date();
  threeMonthsFromNow.setMonth(currentDate.getMonth() + 3);

  const upcomingActivities = activitiesData.filter((activity) => {
    const activityDate = new Date(activity.date);
    return activityDate >= currentDate && activityDate <= threeMonthsFromNow;
  });

  const upcomingEvents = activitiesData.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate > threeMonthsFromNow;
  });

  return (
    <div id="allActivities-container">
      <div id="activities-title-container">
        <h1>Actividades</h1>
      </div>
      <div id="trimester-activities" className="mt-5">
        <div id="trimester-title">
          <h2>¿Que tenemos este trimestre?</h2>
        </div>
        <div
          id="trimester-card-activities"
          className="flex flex-wrap max-w-[360px] gap-5"
        >
          {upcomingActivities.map((activity) => (
            <Card className="mt-2 w-[150px] max-w-[150px]" key={activity.id}>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-sm h-[50px]">{activity.title}</p>
                  <p className="text-small text-default-500 h-[20px]">
                    {activity.date}
                  </p>
                  <p className="text-small text-default-500 h-[30px]">
                    {activity.schedule}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardFooter className="flex justify-center">
                <Link
                  className="text-center"
                  href="modal" // linkear a modal de actividad que corresponda, quizas agregarle un id a cada actividad
                >
                  <Button>VER MÁS</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div id="year-activities" className="mt-10">
        <div id="year-activities-title">
          <h2>Que nos espera en el año</h2>
        </div>
        <div
          id="year-card-activities"
          className="flex flex-wrap max-w-[360px] gap-5"
        >
          {upcomingEvents.map((event) => (
            <Card className="mt-2 w-[150px] max-w-[150px]" key={event.id}>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-sm h-[50px]">{event.title}</p>
                  <p className="text-small text-default-500 h-[20px]">
                    {event.date}
                  </p>
                  <p className="text-small text-default-500 h-[30px]">
                    {event.schedule}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardFooter className="flex justify-center">
                <Link
                  href="modal" // linkear a modal de actividad que corresponda
                >
                  <Button>VER MÁS</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionActivities;
