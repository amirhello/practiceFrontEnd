import { createContext } from "react";
export interface Theme {
  theme: string;
  getTheme: () => void;
}

export const ThemeContext = createContext<Theme | null>(null);
