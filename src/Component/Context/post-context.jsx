import { createContext, useState, useEffect } from "react";
import { getPostAndDocuments } from "../../Utils/firebase-utils";
import POST_DATA from "../../Utils/posts";
import { addCollectionsAndDocuments } from "../../Utils/firebase-utils";

export const postContext = createContext({
  posts: {},
  setPosts: () => {},
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //addCollectionsAndDocuments("posts", POST_DATA);
    const postMaps = async () => {
      const postMap = await getPostAndDocuments();
      setPosts(postMap);
    };
    postMaps();
  }, []);

  return (
    <postContext.Provider value={{ posts, setPosts }}>
      {children}
    </postContext.Provider>
  );
};
