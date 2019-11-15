import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from './components/SearchForm';
import styled from "styled-components";

const AppStyles = styled.div`

height: 98vh;
margin: 4rem auto;

main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  background: lightblue;
}

`;


export default function App() {
  return (
    <AppStyles>
    <main>
      <Header />
      <Route exact path ="/search" component={SearchForm}/>
      <Route exact path ="/" component={WelcomePage}/>
      <Route exact path="/Characters" component={CharacterList}/>
    </main>
    </AppStyles>
  );
}
