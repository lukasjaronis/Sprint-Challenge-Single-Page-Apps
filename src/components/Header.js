import React from "react";
import styled from "styled-components";


const HeaderStyles = styled.div`

border-bottom: 1px solid #fff;

`;

export default function Header() {
  return (
    <HeaderStyles>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    </HeaderStyles>
  );
}
