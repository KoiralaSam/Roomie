import { createContext, useState } from "react";
import { useEffect } from "react";
import { onAuthStateChangedListner } from "../../Utils/firebase-utils";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChangedListner((user) => {
        if (!user) {
          setCurrentUser(null);
          return;
        }
        setCurrentUser(user);
        console.log(user);
      });
    return unsubscribe;
  }, []);

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </userContext.Provider>
  );
};
