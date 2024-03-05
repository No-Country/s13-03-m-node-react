import FirstModal from "../firstModal";

function SectionActivities({ activitiesData }) {
  function formatDate(dateString) {
    const [day, month] = dateString.split("-");
    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}`;
  }
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
          className="flex flex-wrap justify-center max-w-[360px] gap-5  bg-[#FDFBFF]"
        >
          {activitiesData.map((activity) => (
            <div
              className="flex flex-col justify-start mt-2 w-[150px] max-w-[150px] bg-[#FDFBFF] border rounded-xl pt-5 pb-5 shadow-[#67B7B3] shadow-sm"
              key={activity._id}
            >
              <div className="flex flex-col bg-[#FDFBFF] pl-2">
                <div className="flex flex-col justify-between flex-grow">
                  <div className="min-h-[fit] h-[95px]">
                    <p className="font-bold text-[#280058]">{activity.title}</p>
                  </div>
                  <div className="min-h-[fit] h-[2px]">
                    <p className="text-[16px] font-medium text-[#280058]">
                      {formatDate(activity.activityDate)}
                    </p>
                  </div>
                </div>
                <div className="flex pt-10 justify-center">
                  <button className="text-center">
                    <div className="mx-auto">
                      <FirstModal />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionActivities;
