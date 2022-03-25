import { createContext, useContext, useState } from "react";
import { APIMe } from "../types";

interface UserContext {
  user: APIMe | null;
  setUser: (user: APIMe | null) => void;
}

const UserContext = createContext<UserContext | null>(null);

// @ts-expect-error Binding element 'children' implicitly has an 'any' type.ts(7031)
export function UserProvider({ children }) {
  const [user, setUser] = useState<APIMe | null>(null);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: (user: APIMe | null) => {
          setUser(user);
        }
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error("useUser must be used inside a `UserProvider`");

  return context;
}
