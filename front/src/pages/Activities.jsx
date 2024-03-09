import { Helmet } from "react-helmet";
import ActivitiesContainer from "../components/activities/ActivitiesContainer";

function Activities() {
  return (
    <>
    <Helmet>
    <title>Mis actividades</title>
    <meta name="description" content="Tendrás las actividades, notificaciones urgentes y una galería de fotos de acuerdo a las actividades." />
    </Helmet>
    <div>
      <ActivitiesContainer />
    </div>
    </>
  );
}

export default Activities;