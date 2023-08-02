import React from "react";
import { useSelector } from "react-redux";
import "./genras.scss";

const Genres = ({ data }) => {
  const { genras } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((gen) => {
        if (!genras[gen]?.name) {
          return;
        }
        return (
          <div key={gen} className="genre">
            {genras[gen]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
