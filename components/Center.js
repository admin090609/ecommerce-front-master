import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;
justify-content: center;

`;

export default function Center({ children }) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}