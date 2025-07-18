const geteData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
};

const Post = async () => {
  let postData = await geteData();
  console.log(postData);

  return (
    <div>
      <h1>Post Data</h1>
      {postData.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};

export default Post;
