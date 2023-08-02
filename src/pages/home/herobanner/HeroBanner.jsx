import React, { useEffect, useState } from "react";
import "./herobanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../customhooks/useFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      data &&
      url.backdrop + data.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const inputChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-image">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              name="search"
              placeholder="Search for a Movie or Tv show....."
              onKeyUp={searchQueryHandler}
              onChange={inputChangeHandler}
            />
            <button
              onClick={() => {
                query.length > 1 && navigate(`/search/${query}`);
              }}
              style={{ cursor: "pointer" }}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
