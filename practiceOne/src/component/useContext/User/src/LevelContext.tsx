import { createContext } from "react";

export interface CurrentUserContextType {
  username: string | undefined;
  name: string;
  updateUser: (name: string, username: string) => void;
}

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null
);
