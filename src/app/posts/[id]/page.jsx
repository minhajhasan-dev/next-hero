const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

export const generateMetadata = async ({ params }) => {
  const postData = await getDetailsPost(params.id);
  console.log(postData);
  return {
    title: postData.title,
    description: postData.body,
  };
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id);
  console.log(title, body);
  return (
    <div className="h-screen">
      <h6 className="text-2xl font-bold text-center my-5">Post Details</h6>
      <div className="bg-gray-200 p-4 container mx-auto">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PostDetailsPage;

// 78-2 থেকে দেখি 