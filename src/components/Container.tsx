import { useContext } from "react";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { ThemeContext } from "../utils/ThemeContext";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const StyledContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  transition: theme.transitions.$theme.value,
  "&.dark": {
    background: darkTheme.colors.$bgColor.value,
  },
  "&.light": {
    background: lightTheme.colors.$bgColor.value,
  },
});

export function Container({ children }: IProps) {
  const theme = useContext(ThemeContext);

  return <StyledContainer className={theme}>{children}</StyledContainer>;
}
