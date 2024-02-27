

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
        <h1 className="text-[20px] font-bold text-[#280058]">
          Mis Actividades
        </h1>
      </div>
      <div id="trimester-activities" className="mt-5">
        <div id="trimester-title">
          <h2 className="text-[16px] font-medium text-[#280058]">
            ¿Que nos espera este trimestre?
          </h2>
        </div>
        <div
          id="trimester-card-activities"
          className="flex flex-wrap justify-center max-w-[360px] gap-5"
        >
          {upcomingActivities.map((activity) => (
            <div
              className="flex flex-col justify-start mt-2 w-[150px] max-w-[150px] bg-[#FDFBFF] border rounded-xl pt-5 pb-5 shadow-[#67B7B3] shadow-sm"
              key={activity.id}
            >
              <div className="flex gap-3 bg-[#FDFBFF] pl-2">
                <div className="flex flex-col">
                  <p className="font-bold text-[#280058] h-[50px]">
                    {activity.title}
                  </p>
                  <p className="font-medium text-[#280058] h-[20px]  justify-start">
                    {activity.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-center bg-[#FDFBFF] pt-3">
                <button className="text-center">
                  <a href={`modal/${activity.id}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                      VER MÁS
                    </button>
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="year-activities" className="mt-10">
        <div id="year-activities-title">
          <h2 className="text-[16px] font-medium text-[#280058]">Que nos espera en el año</h2>
        </div>
        <div
          id="year-card-activities"
          className="flex flex-wrap max-w-[360px] gap-5"
        >
          {upcomingEvents.map((event) => (
            <div
              className="flex flex-col justify-start mt-2 w-[150px] max-w-[150px] bg-[#FDFBFF] border rounded-xl pt-5 pb-5 shadow-[#67B7B3] shadow-sm"
              key={event.id}
            >
              <div className="flex gap-3 bg-[#FDFBFF] pl-2">
                <div className="flex flex-col">
                  <p className="font-bold text-[#280058] h-[50px]">
                    {event.title}
                  </p>
                  <p className="font-medium text-[#280058] h-[20px]  justify-start">
                    {event.date}
                  </p>
                  <p className="font-medium text-[#280058] h-[30px]  justify-start">
                    {event.schedule}
                  </p>
                </div>
              </div>
              <div className="flex justify-center bg-[#FDFBFF] pt-3">
                <button className="text-center">
                  <a href={`modal/${event.id}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                      VER MÁS
                    </button>
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionActivities;
