import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInnerTodo } from "../../../store/feature/todoSlice";
import { Button, OutlinedInput } from "@mui/material";
import { styled } from "styled-components";
import Modal from "../../modal/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsIcon from "@mui/icons-material/Collections";

export const Todo = (todoId) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [formState, setFormState] = useState({
    isOpen: false,
    todoName: "",
  });

  const todo = useSelector((state) => {
    const foundTodo = state.todos.todo.find(
      (item) => item.id === todoId.todoId
    );
    return foundTodo ? foundTodo.task : [];
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (formState.todoName.trim()) {
      dispatch(
        addInnerTodo({
          todoId,
          innerTask: { id: new Date().toString(), text: formState.todoName },
        })
      );
      setFormState({ isOpen: false, todoName: "" });
    }
  };

  function changeDeleteModalState() {
    setOpenModal((prev) => !prev);
  }

  return (
    <Container>
      {todo.map((todo, index) => (
        <ContainBtn>
          <Button
            variant="outlined"
            onClick={changeDeleteModalState}
            key={index}
          >
            {todo.text}
          </Button>
          {openModal && (
            <Modal id={todo.id} closeModalHandler={changeDeleteModalState} />
          )}
        </ContainBtn>
      ))}
      {formState.isOpen ? (
        <form onSubmit={handleAddTask}>
          <MiniContainer>
            <OutlinedInput
              type="text"
              value={formState.todoName}
              onChange={(e) =>
                setFormState({ ...formState, todoName: e.target.value })
              }
            />
            <ButtonContain>
              <Button variant="contained" type="submit">
                добавить карточку
              </Button>
              <CloseIcon
                onClick={() => setFormState({ ...formState, isOpen: false })}
              ></CloseIcon>
            </ButtonContain>
          </MiniContainer>
        </form>
      ) : (
        <MiniButtonContain>
          <Button
            variant="contained"
            onClick={() => setFormState({ isOpen: true, todoName: "" })}
          >
            +добавить карточку
          </Button>
          <CollectionsIcon></CollectionsIcon>
        </MiniButtonContain>
      )}
    </Container>
  );
};
const ButtonContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const MiniButtonContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const ContainBtn = styled.div`
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1c171725;
    color: #fff;
    width: 200px;
    height: 40px;
    border-radius: 10px;
  }
`;
