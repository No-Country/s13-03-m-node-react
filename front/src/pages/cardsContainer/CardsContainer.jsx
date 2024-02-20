import NotificationsContainer from "./cards/notifications/NotificationsContainer";
import AcademicPathContainer from "./cards/academicPath/AcademicPathContainer";

function CardsContainer() {
  return (
    <div className="flex flex-col items-center justify-center w-[328px]">
      <NotificationsContainer />
      <AcademicPathContainer />
    </div>
  );
}

export default CardsContainer;
