import getData from "@/services/getData";
import Link from "next/link";

const StaticSiteGenerative = async () => {
  const result = getData();
  const users = await result;
  //   console.log(users);

  return (
    <div>
      <h1>Static Site Generative</h1>
      {users.map((el) => (
        <h3 key={el.id}>
          <Link href={`/ssg/${el.id}`}>{el.username}</Link>
        </h3>
      ))}
    </div>
  );
};

export default StaticSiteGenerative;
