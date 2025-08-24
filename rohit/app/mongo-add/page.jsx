"use client";
import React, { useState } from "react";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const addEmployee = async () => {
    let data = await fetch("http://localhost:3000/api/db-emp", {
      method: "post",
      body: JSON.stringify({ name, age, salary }),
    });
    console.log("before", data);

    data = await data.json();
    console.log("after", data);

    if (data.success) {
      alert("data added");
    } else {
      alert("not added bola na not added");
    }
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <br /> <br />
      <button onClick={addEmployee}>submit</button>
    </div>
  );
};

export default AddEmployee;
