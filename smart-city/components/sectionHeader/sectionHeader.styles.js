import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const SectionHeaderWrapper = styled(FlexibleDiv)`
  width: auto;
  justify-content: center;
`;

export const SectionHeaderText = styled.h1`
  color: ${({ color }) => (color ? color : "#302121")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "2rem")};
  font-weight: 600;
  word-wrap: wrap;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
`;
