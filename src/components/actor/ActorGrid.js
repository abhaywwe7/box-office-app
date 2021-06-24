import React from "react";
import ActorCard from "./ActorCard.js";
const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : "not found"}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
