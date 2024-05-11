import { useEffect, useState } from "react";
import { Post } from "../Post/Post";

type PostType = {
  id: number;
  title: string;
};

export const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");

      if (!res.ok) throw new Error("Cannot fetch posts!");

      const { posts } = await res.json();

      if (posts) setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return posts.length > 0 ? (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  ) : (
    "Brak informacji o postach"
  );
};
