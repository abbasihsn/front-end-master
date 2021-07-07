import React from "react";
import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((p) => (
          <Pet
            animal={p.type + p.photos.length}
            breed={p.breeds.primary}
            name={p.name}
            key={p.id}
            media={p.photos}
            location={`${p.contact.address.city}, ${p.contact.address.state}`}
            id={p.id}
          />
        ))
      )}
    </div>
  );
};

export default Result;
