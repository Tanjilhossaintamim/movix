import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../customhooks/useFetch";

const Recomendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);
  const title = mediaType == "tv" ? "Similar Tv shows" : "Similar Movies";
  return (
    <Carousel
      title={"Recomendations"}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Recomendation;
