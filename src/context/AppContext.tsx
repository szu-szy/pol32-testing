import { FC, PropsWithChildren, createContext } from "react";
import { useAppContext } from "./hooks/useAppContext";

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
  const { posts, addPost, updatePost, deletePostByID } = useAppContext();

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
