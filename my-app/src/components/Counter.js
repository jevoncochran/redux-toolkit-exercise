import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

export default function Counter() {
  const { count, displayUpdate, update } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "8%",
          height: "30vh",
          //   border: "1px dashed black",
        }}
      >
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <p style={{ fontSize: "2rem" }}>{count}</p>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </div>
      {displayUpdate && (
        <p style={{ fontSize: "2rem", textAlign: "center" }}>{update}</p>
      )}
    </div>
  );
}

const Button = styled.button`
  width: 30%;
  height: 4vh;
  font-size: 2rem;
`;
