import React from "react";
import { TodoList } from "./TodoList";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import { Button, OutlinedInput } from "@mui/material";
import { addTodo } from "../../store/feature/todoSlice";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm();
  const [isInputShow, setIsInputShow] = React.useState(false);

  const onSubmit = (data) => {
    if (data.text.trim()) {
      dispatch(addTodo({ id: new Date().toString(), text: data.text }));
      reset();
      setIsInputShow(false);
    }
  };

  return (
    <Container>
      <TodoList handlerAdd={onSubmit} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {isInputShow ? (
          <MainContainer>
            <Controller
              name="text"
              control={control}
              render={({ field }) => (
                <OutlinedInput
                  style={{ color: "#fff" }}
                  {...field}
                  placeholder="Ввести заголовок"
                />
              )}
            />
            <ButtonContain>
              <Button variant="contained" type="submit">
                Добавить список
              </Button>
              <CloseIcon onClick={() => setIsInputShow(false)}></CloseIcon>
            </ButtonContain>
          </MainContainer>
        ) : (
          <MiniButtonContain>
            <Button
              variant="contained"
              type="submit"
              onClick={() => setIsInputShow(true)}
            >
              + добавить еще одну колонку
            </Button>
          </MiniButtonContain>
        )}
      </form>
    </Container>
  );
};

const MiniButtonContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-left: 20px;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #141010b0;
    color: #fff;
    width: 290px;
    height: 40px;
    border-radius: 10px;
  }
`;

const ButtonContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
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
const Container = styled.div`
  display: flex;
  width: 100%;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #211e1e91;

  gap: 20px;
  margin-top: 50px;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 40px;
  width: 250px;
  height: 160px;
`;
