import { createContext, useState, Dispatch, SetStateAction } from "react";

interface ContextProps {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
}

export const CurrentUserContext = createContext<ContextProps>({
  user: null,
  setUser: () => {},
});

export const CurrentUserContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [user, setUser] = useState<any>(null);

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
