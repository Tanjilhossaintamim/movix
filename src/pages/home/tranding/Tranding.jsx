import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTab";
import useFetch from "../../../customhooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Tranding = () => {
  const [endpoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const tabChangeHandler = (tab) => {
    setEndPoint(tab == "day" ? "day" : "week");
  };
  return (
    <div className="caroselSection">
      <ContentWrapper>
        <span className="caroselTitle">Trending</span>
        <SwitchTab data={["day", "week"]} tabChangeHandler={tabChangeHandler} />
      </ContentWrapper>
      <Carousel data={data && data.results} loading={loading} />
    </div>
  );
};

export default Tranding;
