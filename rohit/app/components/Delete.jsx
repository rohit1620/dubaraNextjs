"use client";
import React, { useState } from "react";

const Delete = ({ id }) => {
  const deletData = async () => {
    let data = await fetch(`http://localhost:3000/api/employee/${id}`, {
      method: "delete",
    });
    data = await data.json();
    console.log(data);

    if (data.success) {
      console.log("itam deleted ho gya hai bhai");
    } else {
      console.log("kuch to problem aa rhi hai delete hone me");
    }
  };
  return (
    <>
      <button onClick={deletData}>Delete</button>
    </>
  );
};

export default Delete;
