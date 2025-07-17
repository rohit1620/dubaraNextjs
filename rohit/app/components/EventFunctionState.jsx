"use client";
import React from "react";

const EventFunctionState = () => {
  const hello = (data) => {
    alert(data);
  };
  return (
    <div>
      <h1>Event Function State</h1>
      {/* <button
        onClick={() => alert("Kushal")}
        style={{ padding: "5px", color: "white", backgroundColor: "black" }}
      >
        Click
      </button> */}
      {/* <button
        onClick={() => hello()}
        style={{ padding: "5px", color: "white", backgroundColor: "black" }}
      >
        Click
      </button> */}
      <button
        onClick={() => hello("Keshav")}
        style={{ padding: "5px", color: "white", backgroundColor: "black" }}
      >
        Click
      </button>
    </div>
  );
};

export default EventFunctionState;
