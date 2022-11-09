import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const ImageTextCardWrapper = styled(FlexibleDiv)`
  width: max-content;
  min-width: max-content;
  height: max-content;
  padding: 0;
  justify-content: center;
  overflow: hidden;
  margin: 0 2rem 1.5rem 0;
`;

export const ImageWrapper = styled(FlexibleDiv)`
width:150px;
  min-width: 150px;
  height: 150px;
  border-radius: 10px;
  padding: 0;
  margin-bottom:8px;
  background-color: teal;
  position:relative;
  overflow:hidden;
`;
export const CardText = styled.p`
  color: #000;
  font-size: 1rem;
  padding: 0;
`;

// export const ImageCardWrapper = styled(FlexibleDiv)``;
