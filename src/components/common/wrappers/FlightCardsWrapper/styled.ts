import styled from "styled-components";
import { COLOR_BLUE } from "../../constants";
import { Card } from "../../typography";

export const StyledFlightWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledText = styled.p`
  height: 20px;
  margin: 0 0 20px;
  font-size: 24px;
  color: ${COLOR_BLUE};
`