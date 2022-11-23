import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const ImageCardWrapper = styled(FlexibleDiv)`
  position: relative;
  width: ${({ width }) => (width ? width : "60%")};
  height: ${({ height }) => (height ? height : "65vh")};
  padding: 0;
  border-radius: 10px;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 1rem;
  @media (max-width: 1300px) {
    position: relative;
    width: ${({ resWidth }) => (resWidth ? resWidth : "60%")};
    height: ${({ resHeight }) => (resHeight ? resHeight : "50vh")};
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const IconContainer = styled(FlexibleDiv)`
width:auto;
height:auto;
position:absolute;

`;

// export const ImageCardWrapper = styled(FlexibleDiv)``;
