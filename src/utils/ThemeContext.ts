import { createContext } from "react";

export type Theme = "light" | "dark";

export const ThemeContext = createContext<Theme>(
  (localStorage.getItem("theme") as Theme) || "light"
);
