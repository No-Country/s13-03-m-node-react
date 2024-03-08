import CardsContainer from "../components/home/CardsContainer";
import Banner from "../components/Banner";
import MapToSchool from "../components/home/MapToSchool";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
        <meta name="description" content="Página de inicio, encontraras el acceso a las notificaciones, las actividades escolares y su recorrido académico." />
      </Helmet>
      <Banner />
      <div className="text-3xl  flex justify-center items-center">
        <CardsContainer />
      </div>
      <MapToSchool />
    </>
  );
};

export default Home;
