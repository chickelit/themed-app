import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { AnchorHTMLAttributes, useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode | React.ReactNode[];
}

const StyledSocial = styled("a", {
  width: "3rem",
  aspectRatio: "1 / 1",
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  transition: theme.transitions.$theme.value,
  svg: {
    width: "60%",
    aspectRatio: "1 / 1",
  },
  "&.light": {
    background: lightTheme.colors.$bgColorSecondary.value,
    "&:hover": {
      background: lightTheme.colors.$bgColorSecondaryDarker.value,
    },
  },
  "&.dark": {
    background: darkTheme.colors.$bgColorSecondary.value,
    "&:hover": {
      background: darkTheme.colors.$bgColorSecondaryDarker.value,
    },
  },
});

export function Social({ children, ...rest }: IProps) {
  const theme = useContext(ThemeContext);

  return (
    <StyledSocial {...rest} className={theme}>
      {children}
    </StyledSocial>
  );
}
