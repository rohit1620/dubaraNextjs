"use client";
import React, { use } from "react";

const Posts = ({ params }) => {
  const { post } = use(params);
  return (
    <div>
      <h1>{post[0]}</h1>
      <h1>{post[1]}</h1>
      <h1>{post[2]}</h1>
      <h1>{post[3]}</h1>
      <h1>{post[4]}</h1>
    </div>
  );
};

export default Posts;
