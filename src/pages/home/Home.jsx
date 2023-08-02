import HeroBanner from "./herobanner/HeroBanner";
import "./home.scss";
import Popular from "./popular/Popular";
import TopRatted from "./topRated/TopRatted";
import Tranding from "./tranding/Tranding";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Tranding />
      <Popular />
      <TopRatted />
    </div>
  );
};

export default Home;
