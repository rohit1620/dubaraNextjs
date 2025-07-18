import MyPost from "./myPost";

const geteData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
};

const Post = async () => {
  let postData = await geteData();
  // console.log(postData);

  return (
    <div>
      <h1>Post Data</h1>
      {postData.map((post) => (
        <ul>
          <li key={post.id}>{post.title}</li>
          <li>
            <MyPost data={post.id} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Post;
