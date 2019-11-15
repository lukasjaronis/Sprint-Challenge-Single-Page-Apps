import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Axios as Requester} from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [data, updateData] = useState( [] );
  const [search, setSearch] = useState( [] );


  useEffect( () => {

  })
 
  return (
    <section className="search-form">
     // Add a search form here
    </section>
  );
}
