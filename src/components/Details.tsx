import { styled, theme } from "../stitches.config";

interface IProps {
  title: string;
  paragraph: string;
}

const StyledDetails = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content max-content",
  justifyItems: "center",
  gap: "0.5rem",
});

const Title = styled("h3", {
  margin: 0,
  fontSize: "1.5rem",
  fontWeight: 500,
  color: theme.colors.$titleColor.value,
});

const Paragraph = styled("h3", {
  margin: 0,
  fontSize: "1rem",
  fontWeight: 400,
  color: theme.colors.$textColor.value,
});

export function Details(props: IProps) {
  return (
    <StyledDetails>
      <Title>{props.title}</Title>
      <Paragraph>{props.paragraph}</Paragraph>
    </StyledDetails>
  );
}
