"use client";

const MyPost = ({ data }) => {
  return (
    <div>
      <button onClick={() => alert(data)}>click</button>
    </div>
  );
};

export default MyPost;
