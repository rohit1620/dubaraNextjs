"use client";
import React, { useEffect, useState } from "react";

const Update = ({ params }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { empid } = React.use(params);
  console.log("id", empid);

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`http://localhost:3000/api/employee/${empid}`);
      data = await data.json();
      //   console.log("data", data.result[0].age);
      setName(data.result[0].name);
      setAge(data.result[0].age);
    };
    getData();
  }, [empid]);
  const update = async () => {
    let value = await fetch(`http://localhost:3000/api/employee/${empid}`, {
      method: "put",
      body: JSON.stringify({ name, age }),
    });
    value = await value.json();
    if (value.success) {
      alert("Data Update Successfully");
    } else {
      alert("Something Wrong");
    }
  };
  return (
    <div>
      <h1>Update Page</h1> <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br /> <br />
      <button onClick={update}>edit</button>
    </div>
  );
};

export default Update;
