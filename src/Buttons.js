import React from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  const addNumber = () => {
    dispatch({
      type: "Plus",
    });
  };
  const removeNumber = () => {
    dispatch({
      type: "Minus",
    });
  };
  const resetNumber = () => {
    dispatch({
      type: "Reset",
    });
  };
  const randomNumber = () => {
    dispatch({
      type: "Random",
    });
  };

  return (
    <div>
      <button onClick={() => addNumber()}>+</button>
      <button onClick={() => removeNumber()}>-</button>
      <button onClick={() => resetNumber()}>Reset</button>
      <button onClick={() => randomNumber()}>Random</button>
    </div>
  );
};

export default Buttons;
