import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Blog Post #{postId}</h1>
      <p>This is the content for blog post with ID {postId}.</p>
    </div>
  );
};

export default BlogPost;
