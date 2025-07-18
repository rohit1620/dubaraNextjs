"use client";
import { useState } from "react";
const Style = () => {
  const [color, setColor] = useState({
    backgroundColor: "green",
    color: "white",
  });
  return (
    <div>
      <h1>heading one</h1>
      <h2>heading two</h2>
      <h3 style={color}>heading three</h3> <br />
      <button
        onClick={() => setColor({ backgroundColor: "yellow", color: "black" })}
      >
        clickForColor
      </button>
    </div>
  );
};

export default Style;
