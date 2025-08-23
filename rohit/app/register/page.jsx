"use client";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const registerData = async () => {
    // console.log(username, age);
    let data = await fetch("http://localhost:3000/api/user", {
      method: "Post",
      body: JSON.stringify({ username, age }),
    });
    data = await data.json();
    console.log(data);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Register Page</h1> <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter User-Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button onClick={registerData}>submit</button>
      </div>
    </>
  );
};

export default Register;
