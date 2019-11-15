import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const SearchFormStyles = styled.div`

section {
  
  .content-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    height: 5rem;
  }

}

`;

export default function SearchForm() {
  const [ data, updateData ] = useState([]);
  const [ search, setSearch ] = useState("");
 
useEffect(() => {
  Axios
  .get("https://rickandmortyapi.com/api/character/")
  .then (response => {
    const characters = response.data.results.filter(char => char.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      updateData(characters);
  });
  },[search]);

  const HandleChange = event => {
    setSearch(event.target.value)
  };

 
  return (
    <SearchFormStyles>
    <section className="search-form">
    <div className="content-container">
    <TextField className="textfield" id="name" label="Search" type="search" margin="normal" variant="outlined" onChange={HandleChange} />
    <Link to="/"><Button>Go Home</Button></Link>
    </div>

    {data.map((char => {
      return (
        <CharacterCard key={char.id} name={char.name} species={char.species} status={char.status} imageURL={char.image} gender={char.gender} />
      )
    }))}


    </section>
    </SearchFormStyles>
  );
}
