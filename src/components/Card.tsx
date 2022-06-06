import { BaseHTMLAttributes, useContext } from "react";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { ThemeContext } from "../utils/ThemeContext";

interface IProps extends BaseHTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[];
}

const StyledCard = styled("section", {
  width: "max-content",
  height: "max-content",
  padding: "4rem",
  borderRadius: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  justifyItems: "center",
  gap: "1rem",
  transition: theme.transitions.$theme.value,
  "&.dark": {
    background: darkTheme.colors.$bgColorLighter.value,
  },
  "&.light": {
    background: lightTheme.colors.$bgColorDarker.value,
  },
});

export function Card({ children, ...rest }: IProps) {
  const theme = useContext(ThemeContext);

  return (
    <StyledCard {...rest} className={theme}>
      {children}
    </StyledCard>
  );
}
