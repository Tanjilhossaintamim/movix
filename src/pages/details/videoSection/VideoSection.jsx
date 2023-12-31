import React, { useState } from "react";
import "./videosection.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopUp from "../../../components/videoPopUp/VideoPopUp";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../PlayIcon";

const VideoSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const loadingskelton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayIcon />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingskelton()}
            {loadingskelton()}
            {loadingskelton()}
            {loadingskelton()}
            {loadingskelton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopUp
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideoSection;
