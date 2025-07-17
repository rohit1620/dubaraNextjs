"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const mixFun = (data) => {
    router.push(data);
  };
  return (
    <div>
      <h1>Home page</h1>
      {/* <button onClick={() => router.push("/about")}>About</button>
      <button onClick={() => router.push("/contact")}>Contact</button> */}

      <button onClick={() => mixFun("/about")}>About</button>
      <button onClick={() => mixFun("/contact")}>Contact</button>
    </div>
  );
};

export default Home;
