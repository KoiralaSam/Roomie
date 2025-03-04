import { createContext, useState } from "react";
import { useEffect } from "react";
import { onAuthStateChangedListner } from "../../Utils/firebase-utils";
import { createUserDocumentFromAuth } from "../../Utils/firebase-utils";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChangedListner(async (user) => {
        if (user) {
          await createUserDocumentFromAuth(user, { posts: [] });
        }
        setCurrentUser(user);
      });
    return unsubscribe;
  }, []);

  return (
    <userContext.Provider
      value={{ currentUser, setCurrentUser, create, setCreate }}
    >
      {children}
    </userContext.Provider>
  );
};
