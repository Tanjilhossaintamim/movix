import "./details.scss";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetch from "../../customhooks/useFetch";
import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
import SimilarMovie from "./similarMovie/SimilarMovie";
import Recomendation from "./similarMovie/Recomendation";

const Details = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: cradits, loading: craditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={cradits?.crew} />
      <Cast data={cradits?.cast} loading={craditsLoading} />
      <VideoSection data={data} loading={loading} />
      <SimilarMovie mediaType={mediaType} id={id} />
      <Recomendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
