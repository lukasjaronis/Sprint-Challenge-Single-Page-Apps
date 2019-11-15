import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

const WelcomeStyles = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;



section {
  height: 100%;
  width: 50%;
  padding: 10px;
  margin: 10px;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

}


  Button {
    font-weight: 900;
  letter-spacing: 1px;
  text-decoration: none; 
  padding: 5px;
  }




img {
  padding: 1rem;
  margin: 2rem;
  width: 80%;
}

`;




export default function WelcomePage() {
  const classes = makeStyles;
  return (
    <WelcomeStyles>
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/characters"><Button>Characters</Button></Link>
        <Link to="/search"><Button>Search</Button></Link>


        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
    </WelcomeStyles>
  );
}
