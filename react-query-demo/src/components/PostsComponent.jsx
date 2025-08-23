import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"], // cache key
    queryFn: fetchPosts,
    staleTime: 5000, // data stays fresh for 5s
    cacheTime: 1000 * 60 * 5, // cache for 5min
    refetchOnWindowFocus: true, // 🔥 auto-refetch when window regains focus
    keepPreviousData: true, // 🔥 keep showing old data while fetching new
  });

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (isError)
    return <p className="text-red-500 text-center">Error: {error.message}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
