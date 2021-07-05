import React, { useState, useEffect } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import { ToastContainer, toast } from "react-toastify";

const SearchParamas = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location ">
          <h2>{location}</h2>
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("here");
            toast("success", "Hello");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchParamas;
