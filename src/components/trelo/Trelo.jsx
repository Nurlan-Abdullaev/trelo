import React from "react";
import { Header } from "../header/Header";
// import DrakAndDrop from "../drakAndDrop/DrakAndDrop";
import { TodoForm } from "../todo/ TodoForm";

export const Trelo = () => {
  return (
    <div>
      <Header />
      <div>
        {/* <DrakAndDrop /> */}
        <TodoForm />
      </div>
    </div>
  );
};
