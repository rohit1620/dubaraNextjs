import Link from "next/link";
import React from "react";

const getData = async () => {
  let data = await fetch("http://localhost:3000/api/db-emp");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return false;
  }
};
const EmployeeGEt = async () => {
  let values = await getData();
  return (
    <div>
      <h1>MongoDB get data</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {values.map((el, i) => (
            <tr key={i}>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{el.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/" style={{ backgroundColor: "black", color: "white" }}>
        Back To Home
      </Link>
      <Link
        href="/mongo-add"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        add data
      </Link>
    </div>
  );
};

export default EmployeeGEt;
