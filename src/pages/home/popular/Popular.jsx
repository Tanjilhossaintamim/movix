import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTabs/SwitchTab";
import useFetch from "../../../customhooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
    const [endpoint, setEndPoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/popular`);
  
    const tabChangeHandler = (tab) => {
      setEndPoint(tab == "Movies" ? "movie" : "tv");
    };
    return (
      <div className="caroselSection">
        <ContentWrapper>
          <span className="caroselTitle">What's Poplular</span>
          <SwitchTab data={["Movies", "Tv Shows"]} tabChangeHandler={tabChangeHandler} />
        </ContentWrapper>
        <Carousel data={data && data.results} loading={loading} endpoint={endpoint}/>
      </div>
    );
  };
  
  export default Popular;
  