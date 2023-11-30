import { styled } from "@mui/material";
import React, { useState } from "react";

const initialState = [
  {
    id: 1,
    title: "Сделать",
    items: [
      { id: 1, title: "Пойти в магазин" },
      { id: 2, title: "Выкинуть мусор" },
      { id: 3, title: "Помыть посуду" },
    ],
  },
  {
    id: 2,
    title: "Проверить",
    items: [
      { id: 4, title: "Проверить код" },
      { id: 5, title: "Задача на факториал" },
      { id: 6, title: "Задачи на фибоначчи" },
    ],
  },
  {
    id: 3,
    title: "Сделано",
    items: [
      { id: 7, title: "Снять видео" },
      { id: 8, title: "Смонтировать" },
      { id: 9, title: "Отредактировать" },
    ],
  },
];

const DrakAndDrop = () => {
  const [boards, setBoards] = useState(initialState);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains("item")) {
      e.target.style.boxShadow = "0 2px 3px gray";
    }
  }

  function dragLeaveHandler(e) {
    if (e.target.classList.contains("item")) {
      e.target.style.boxShadow = "none";
    }
  }

  function dragEndHandler(e) {
    if (e.target.classList.contains("item")) {
      e.target.style.boxShadow = "none";
    }
  }

  function dropHandler(e, targetBoard, targetItem) {
    e.preventDefault();
    if (currentBoard === targetBoard) {
      const newItems = [...currentBoard.items];
      const currentIndex = newItems.indexOf(currentItem);
      newItems.splice(currentIndex, 1);
      newItems.splice(newItems.indexOf(targetItem), 0, currentItem);

      const newBoards = boards.map((board) => {
        if (board.id === currentBoard.id) {
          board.items = newItems;
        }
        return board;
      });
      setBoards(newBoards);
    } else {
      const sourceBoard = currentBoard;
      const sourceItem = currentItem;

      const newSourceItems = [...sourceBoard.items];
      const sourceIndex = newSourceItems.indexOf(sourceItem);
      newSourceItems.splice(sourceIndex, 1);

      const newTargetItems = [...targetBoard.items];
      const targetIndex = newTargetItems.indexOf(targetItem);
      newTargetItems.splice(targetIndex + 1, 0, sourceItem);

      const newBoards = boards.map((board) => {
        if (board.id === sourceBoard.id) {
          board.items = newSourceItems;
        } else if (board.id === targetBoard.id) {
          board.items = newTargetItems;
        }
        return board;
      });
      setBoards(newBoards);
    }
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  return (
    <Container>
      {boards.map((board) => (
        <Board
          key={board.id}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, board, null)}
        >
          <BoardTitle>{board.title}</BoardTitle>
          {board.items.map((item) => (
            <Item
              key={item.id}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              draggable={true}
              className="item"
            >
              {item.title}
            </Item>
          ))}
          <input type="radio" />
        </Board>
      ))}
    </Container>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Board = styled("div")(() => ({
  minWidth: "300px",
  minHeight: "50%",
  border: "5px solid lightgray",
  padding: "20px 18px",
  borderRadius: "12px",
  margin: "10px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

const BoardTitle = styled("div")(() => ({
  fontSize: "1.5rem",
  fontWeight: "700",
}));

const Item = styled("div")(() => ({
  width: "100%",
  border: "2px sloid lightgray",
  padding: "10px",
  borderRadius: "6px",
  margin: "5px 0",
  cursor: "grab",
  backgroundColor: "#fff",
}));

export default DrakAndDrop;
