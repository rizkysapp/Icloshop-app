import Favorites from "../components/Favorites";
import Footers from "../components/Footers";
import Header from "../components/navbar/Header";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import OnSale from "../components/OnSale";
import SecProd from "../components/SecProd";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Favorites />
      <OnSale />
      <NewArrivals />
      <SecProd />
      <Footers />
    </div>
  );
};

export default Home;
