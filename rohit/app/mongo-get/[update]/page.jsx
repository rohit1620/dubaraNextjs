"use client";
import React, { use, useEffect, useState } from "react";

const EmployeeIDUpdate = ({ params }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  //   console.log("Id", params.update);
  const { update } = use(params);
  console.log("Id", update, "hai");

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`http://localhost:3000/api/db-emp/${update}`);
      data = await data.json();
      if (data.success) {
        setName(data.result.name);
        setAge(data.result.age);
        setSalary(data.result.salary);
      } else {
        alert("something is wronge");
      }
    };
    getData();
  }, [update]);

  const updateData = async () => {
    let data = await fetch(`http://localhost:3000/api/db-emp/${update}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, salary }),
    });
    data = await data.json();
    setName(name);
    setAge(age);
    setSalary(salary);
    if (data.success) {
      alert("data update successfully");
    } else {
      alert("something is wrong");
    }
  };

  return (
    <div>
      <h1>Employee Update by Id in mongoDB</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br /> <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <br /> <br />
      <button onClick={updateData}>submit</button>
    </div>
  );
};

export default EmployeeIDUpdate;
