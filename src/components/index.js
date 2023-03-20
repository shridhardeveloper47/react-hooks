// Libraries
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: #fff;
  ${({ styledCss }) => styledCss};
`;
