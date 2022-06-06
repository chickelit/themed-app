import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Theme, ThemeContext } from "./ThemeContext";

type Response<Theme> = [Theme, Dispatch<SetStateAction<Theme>>];

export function useTheme(): Response<Theme> {
  const currentTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
