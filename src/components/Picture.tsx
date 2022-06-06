import { styled } from "../stitches.config";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const StyledPicture = styled("div", {
  width: "10rem",
  borderRadius: "50%",
  img: {
    width: "100%",
    borderRadius: "50%",
  },
});

export function Picture({ children }: IProps) {
  return <StyledPicture>{children}</StyledPicture>;
}
