// server rendered page

import { getPosts } from "@/services/postApi";
import Link from "next/link";

const PostPage = async () => {
  const postData = await getPosts();
  console.log(postData);
  return (
    <div className="h-screen">
      <h6 className="text-2xl font-bold text-center my-5">All Posts</h6>
      <div className="grid grid-cols-4 gap-4 container mx-auto">
        {postData?.slice(0, 20)?.map((post) => (
          <div key={post.id} className="bg-gray-200 p-4">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.body}</p>
            <button className="bg-blue-500 text-white p-2 rounded-lg">
              {" "}
              <Link href={`/posts/${post.id}`}>See Details</Link>{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
