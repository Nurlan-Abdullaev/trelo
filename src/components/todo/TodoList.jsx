import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { styled } from "styled-components";
import { Todo } from "../todo/nameTodo/Todo";
import Modal from "../todo/Modal";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todo);
  const [openModal, setOpenModal] = useState(false);

  function changeDeleteModalState() {
    setOpenModal((prev) => !prev);
  }

  return (
    <Container>
      <UlContainer>
        {todos.map((todo) => (
          <ol key={todo.id}>
            <MiniContainer>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "#fff",
                }}
              >
                <h2 contentEditable="true">{todo.text}</h2>

                <button onClick={changeDeleteModalState}>...</button>
                {openModal && (
                  <Modal closeModalHandler={changeDeleteModalState} />
                )}
              </div>

              <MainContainer>
                {todo ? (
                  <TodoContain>
                    <Todo todoId={todo.id} />
                  </TodoContain>
                ) : (
                  <>
                    <Button variant="contained">+ добавить картычку</Button>
                  </>
                )}
              </MainContainer>
            </MiniContainer>
          </ol>
        ))}
      </UlContainer>
    </Container>
  );
};

const TodoContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: 20px;
  gap: 20px;
`;
const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const Container = styled.div`
  display: flex;
`;
const MiniContainer = styled.div`
  background-color: #211e1e91;
  width: 250px;
  height: 110%;
  border-radius: 10px;
  button {
    border: none;
    background-color: #1c171725;
    color: #fff;
  }

  h2 {
    color: #fff;
  }
`;
const MainContainer = styled.div`
  display: flex;
  input {
    color: #fff;
    border-radius: 10px;
  }
`;
