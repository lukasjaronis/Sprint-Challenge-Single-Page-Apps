import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [data, updateData] = useState( [] );
  const [search, setSearch] = useState( [] );


  useEffect( () => {
    Axios
  .get("https://rickandmortyapi.com/api/character/")
  .then(response => {
    const characters = response.data.results.filter(char => char.name.toLowerCase().includes(search.toLocaleLowerCase()) 
    );
    updateData(characters);
  })
  }, [search]);
  
  const handleChanges = e => {
    setSearch( e.target.value )
  };
 
  return (
    <section className="search-form">
    <TextField id="name" label="Search" type="search" margin="normal" variant="outlined" onChange={handleChanges} />
    <Link to="/"><Button>Go Home</Button></Link>

    {data.map((char => {
      return (
        <CharacterCard key={char.id} name={char.name} species={char.species} status={char.status} imageURL={char.image} gender={char.gender} />
      )
    }))}


    </section>
  );
}
