import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTab";
import useFetch from "../../../customhooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRatted = () => {
  const [endpoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const tabChangeHandler = (tab) => {
    setEndPoint(tab == "Movies" ? "movie" : "tv");
  };
  return (
    <div className="caroselSection">
      <ContentWrapper>
        <span className="caroselTitle">Top Rated</span>
        <SwitchTab
          data={["Movies", "Tv Shows"]}
          tabChangeHandler={tabChangeHandler}
        />
      </ContentWrapper>
      <Carousel data={data && data.results} loading={loading} endpoint={endpoint}/>
    </div>
  );
};

export default TopRatted;
