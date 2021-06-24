import React from "react";
import ShowCard from "./ShowCard";
const ShowGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : "not found"}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
