"use client";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      setUser(await data.json());
      //   console.log(await data.json());
    }
    getData();
  }, []);
  return (
    <div>
      <h1>This is client side fetch data</h1>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default UserList;
