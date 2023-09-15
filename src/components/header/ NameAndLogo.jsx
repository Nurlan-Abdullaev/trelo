import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/images/trelloLogo.jpg";

const NameAndLogo = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
        <h2> Trello</h2>
      </Container>
    </>
  );
};
const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  h2 {
    color: black;
    font-size: 20px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

export default NameAndLogo;
