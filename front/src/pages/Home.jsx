import CardsContainer from "../components/home/CardsContainer";
import Banner from "../components/Banner";
import MapToSchool from "../components/home/MapToSchool";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="text-3xl  flex justify-center items-center">
        <CardsContainer />
      </div>
      <MapToSchool />
    </>
  );
};

export default Home;
