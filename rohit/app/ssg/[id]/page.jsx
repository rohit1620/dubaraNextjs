import getData from "@/services/getData";

const DynamicPage = async (props) => {
  const result = getData();
  const users = await result;
  const userId = props.params.id;
  const userInfo = users[userId - 1];

  return (
    <div>
      <h1>Dynamic web page</h1>
      <h3>{userInfo.id}</h3>
      <h3>{userInfo.name}</h3>
      <h3>{userInfo.phone}</h3>
    </div>
  );
};

export default DynamicPage;

export const generateStaticParams = async () => {
  const result = getData();
  const users = await result;
  return users.map((user) => ({
    id: user.id.toString(),
  }));
};
