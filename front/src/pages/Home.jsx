import CardsContainer from "../components/home/CardsContainer";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
    <Banner />
    <div className="text-3xl h-screen flex justify-center items-center">
      <CardsContainer/>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
