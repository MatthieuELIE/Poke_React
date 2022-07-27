import { createContext, useState, useEffect } from "react";

import { fetchMe } from "@services/api";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setUser(await fetchMe());
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
