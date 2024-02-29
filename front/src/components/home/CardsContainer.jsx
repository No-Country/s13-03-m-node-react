import NotificationsContainer from "./notifications/NotificationsContainer";
import AcademicPathContainer from "./academicPath/AcademicPathContainer";

function CardsContainer() {
  return (
    <div className="flex flex-col object-center items-center justify-center min-w-[30px] min-h-[500px] mx-auto">
      <NotificationsContainer />
      <AcademicPathContainer />
    </div>
  );
}

export default CardsContainer;
