import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState( [] )

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get('https://rickandmortyapi.com/api/character/') // making a request to get character data
    .then((response => {
      setCharacter(response.data.results);
      console.log(response.data);
    }))

  }, []);

  return (
    <section className="character-list">
    <Link to="/"><Button>Go Home</Button></Link> 
    <Link to="/search"><Button>Search</Button></Link>

    {character.map(element => (
      <CharacterCard
      
      key={element.id}
      name={element.name}
      species={element.species}
      status={element.status}
      imageURL={element.image}
      gender={element.gender}
      
      
      />
    ))}


    </section>
  );
}
