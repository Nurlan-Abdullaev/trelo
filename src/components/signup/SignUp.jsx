import React from "react";
import { styled } from "styled-components";
import { Button, OutlinedInput } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firbase";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const Signup = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
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
    <form onSubmit={handleSubmit(Signup)}>
      <Container>
        <MiniContainer>
          <ContainerInput>
            <h1> FocusApp </h1>
            <OutlinedInput
              required
              type="email"
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <OutlinedInput
              required
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <Button
              style={{
                width: "200px",
                backgroundColor: "green",
                color: "#fff",
              }}
              type="submit"
            >
              Sign up
            </Button>
            <div>
              <p style={{ color: "#066506d4" }}>
                Already have an account?
                <NavLink
                  style={{ textDecoration: "none", color: "#066506d4" }}
                  to="/"
                >
                  Sign in
                </NavLink>
              </p>
            </div>
          </ContainerInput>
        </MiniContainer>
      </Container>
    </form>
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
  height: 350px;
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

export default Signup;
