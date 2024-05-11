import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export type PostType = {
  id: number;
  title: string;
};

// krok 1 - tworzenie typu kontekstu

type AppContextType = {
  posts: PostType[];
  addPost: (post: PostType) => void;
  updatePost: (updatedPost: PostType) => void;
  deletePostByID: (id: number) => void;
};

// krok 2 - tworzymy context na bazie typu
// dopisujemy "export" poniewaz bedzie to potrzebne do uzycia useContext w komponentach

export const AppContext = createContext<AppContextType>({} as AppContextType);

// krok 3 - tworzenie naszego providera z propsami

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
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

  const addPost = (post: PostType) => setPosts((prev) => [...prev, post]);

  const updatePost = (updatedPost: PostType) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (updatedPost.id !== post.id) return post;

        return updatedPost;
      })
    );
  };

  const deletePostByID = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        posts,
        addPost,
        updatePost,
        deletePostByID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// krok 4 - należy owrappować naszą aplikacje <App /> w pliku index.tsx
// krok 5 - jakoś odczytać nasz stan z poziomu komponentu za pomoca useContext(naszContext)
