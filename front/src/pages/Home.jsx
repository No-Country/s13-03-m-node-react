import CardsContainer from "../components/home/CardsContainer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="text-3xl h-screen flex justify-center items-center">
        <CardsContainer />
      </div>
    </>
  );
};

export default Home;
