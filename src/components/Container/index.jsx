import { Container as StyledContainer } from "./styles";

export function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
