import { createContext, useState, useEffect, useMemo } from "react";

import { fetchMe } from "@services/api";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const UserContextProviderWrapper = useMemo(
    () => ({ user, setUser }),
    [user, setUser]
  );

  useEffect(async () => {
    setLoading(true);

    setUser(await fetchMe());

    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <UserContext.Provider value={UserContextProviderWrapper}>
      {children}
    </UserContext.Provider>
  );
}
