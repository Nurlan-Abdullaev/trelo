import { auth } from "../../firbase";
import React from "react";
import { Button } from "@mui/material";
import { styled } from "styled-components";
import { OutlinedInput } from "@mui/material";
import NameAndLogo from "../header/ NameAndLogo";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/trello");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container>
      <NameAndLogo />
      <MiniContainer>
        <h3>Вход в Trello</h3>
        <form onSubmit={handleSubmit(onLogin)}>
          <ContainerInput>
            <OutlinedInput
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Укажите адрес электронной почты"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <OutlinedInput
              id="password"
              name="password"
              type="password"
              required
              placeholder="Введите пароль 8 символов"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Button
              style={{
                width: "200px",
                backgroundColor: "green",
                color: "#fff",
              }}
              variant="contained"
              type="submit"
            >
              Продолжить
            </Button>
            <p>
              Еще нет учетной записи?
              <NavLink
                style={{ textDecoration: "none", color: "#066506d4" }}
                to="/signup"
              >
                Sign up
              </NavLink>
            </p>
          </ContainerInput>
        </form>
      </MiniContainer>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MiniContainer = styled("div")`
  width: 300px;
  height: 320px;
  box-shadow: 0px 6px 18px 14px rgba(34, 60, 80, 0.2);
  background-color: #fff;
`;
const ContainerInput = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export default Login;
