import NotificationsContainer from "./notifications/NotificationsContainer";
import AcademicPathContainer from "./academicPath/AcademicPathContainer";

function CardsContainer() {
  return (
    <div className="flex flex-col object-center items-center justify-centero mt-[-100px]">
      <NotificationsContainer />
      <AcademicPathContainer />
    </div>
  );
}

export default CardsContainer;
