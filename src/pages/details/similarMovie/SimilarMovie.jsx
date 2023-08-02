import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../customhooks/useFetch";

const SimilarMovie = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
  const title = mediaType == "tv" ? "Similar Tv shows" : "Similar Movies";
  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default SimilarMovie;
