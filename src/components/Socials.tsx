import { styled } from "../stitches.config";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const StyledSocials = styled("div", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "0.5rem",
});

export function Socials({ children }: IProps) {
  return <StyledSocials>{children}</StyledSocials>;
}
