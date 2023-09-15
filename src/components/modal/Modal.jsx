import React from "react";
import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ closeModalHandler }) => {
  return (
    <>
      <Backdrop onClick={closeModalHandler} />
      <StyledModal>
        <YesOrNoButtonsContainer>
          <CloseIcon onClick={closeModalHandler}>NO</CloseIcon>
        </YesOrNoButtonsContainer>
        <input type="text" />
      </StyledModal>
    </>
  );
};
export default Modal;

const StyledModal = styled.div`
  width: 500px;
  height: 400px;
  position: fixed;
  top: 15%;
  left: 30%;
  background-color: #ffffff7a;
  border-radius: 10px;
  z-index: 2;
`;
const YesOrNoButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 1 auto;
  button {
    font-size: large;
    color: #ffff;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #201c1c37;
  opacity: 70%;
`;
