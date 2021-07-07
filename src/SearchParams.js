import React, { useState, useEffect, useContext} from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import { ToastContainer, toast } from "react-toastify";
import { async } from "q";
import Result from "./Result";
import ThemeContext from "./ThemeContext";

const SearchParamas = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    console.log(animal);
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      // just to emphesize that this breeds relates on api and not our breeds variable
      const breedsString = apiBreeds.map(({ name }) => name);
      setBreeds(breedsString);
    }, console.error);
  }, [animal, setBreeds, setBreed]); // if we wanted to run this api call only ones! we can put [] in
  // the dependency section

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        <label htmlFor="theme">
          Theme
          <select value={theme} onChange={e=>setTheme(e.target.value)} onBlur={e=>setTheme(e.target.value)}>
            <option value="peru">Peru</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="Red">Red</option>
          </select>
        </label>
        <button
        // onClick={(e) => {
        //   e.preventDefault();
        //   console.log("here");
        //   toast("success", "Hello");
        // }}
        style={{backgroundColor:theme}}
        >
          Submit
        </button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParamas;
