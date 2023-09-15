import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/trelloLogo.jpg";

export const Header = () => {
  return (
    <Container>
      <ContainerImg>
        <img src={logo} alt="logo" />
        <h1>Trello</h1>
      </ContainerImg>
      <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/">
        выход
      </NavLink>
    </Container>
  );
};
const ContainerImg = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    color: #fff;
  }
`;
const Container = styled("div")`
  width: 100%;
  height: 40px;
  background-color: #1210108f;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    color: black;
    font-size: 20px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
  }
  img {
    width: 35px;
    height: 35px;
  }
`;
