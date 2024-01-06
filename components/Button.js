import styled, {css} from "styled-components";
import {primary} from "../lib/colors";

export const ButtonStyle = css`
`

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}