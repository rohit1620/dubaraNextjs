"use client";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";

async function myData() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data;
}

const LoadingData = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const datas = async () => {
      let value = await myData();
      setUsers(value.users);
      setLoading(false);
    };
    datas();
  }, []);
  return (
    <div>
      <h2>Loading data loader</h2>
      {loading ? (
        <Loader />
      ) : (
        user.map((use, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              backgroundColor: "red",
              gap: "30px",
            }}
          >
            <h1>{use.firstName}</h1>
            <h1>{use.lastName}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default LoadingData;
