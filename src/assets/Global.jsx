import styled from "styled-components";

const FormStyled = styled.form`
  & {
    margin: 30px auto;
    display: grid;
    gap: 16px;
    background: #f9f8f8;
    width: 40rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 5rem;
    border-radius: 5px;
  }
  & .textbox {
    position: relative;
    margin-bottom: 16px;
  }
  & .h2 {
    display: flex;
    justify-content: center;
    font-weight: 500;
    color: #6c798f;
  }
  & .textbox span {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    left: 0;
    font-size: 30px;
    color: rgb(25 25 25/40%);
    z-index: 1;
    cursor: pointer;
  }
`;

export { FormStyled };
