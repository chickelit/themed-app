import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { ButtonHTMLAttributes, useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
}

const StyledSwitchButton = styled("button", {
  width: "3rem",
  height: "1.5rem",
  padding: "0.25rem",
  border: "none",
  borderRadius: "0.75rem",
  cursor: "pointer",
  display: "grid",
  alignContent: "center",
  transition: theme.transitions.$theme.value,
  "&:before": {
    content: "",
    position: "absolute",
    left: "0%",
    margin: "0.25rem",
    width: "1rem",
    background: theme.colors.$fillColor.value,
    transition: theme.transitions.$theme.value,
    aspectRatio: "1 / 1",
    borderRadius: "50%",
  },
  "&.dark": {
    background: darkTheme.colors.$bgColorSecondary.value,
    "&:hover": {
      background: darkTheme.colors.$bgColorSecondaryDarker.value,
    },
    "&:before": {
      left: "50%",
    },
  },
  "&.light": {
    background: lightTheme.colors.$bgColorSecondary.value,
    "&:hover": {
      background: lightTheme.colors.$bgColorSecondaryDarker.value,
    },
  },
});

export function SwitchButton({ children, ...rest }: IProps) {
  const currentTheme = useContext(ThemeContext);

  return (
    <StyledSwitchButton {...rest} className={currentTheme}>
      {children}
    </StyledSwitchButton>
  );
}
