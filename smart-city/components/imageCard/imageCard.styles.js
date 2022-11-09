import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const ImageCardWrapper = styled(FlexibleDiv)`
  position: relative;
  width: 60%;
  height: 65vh;
  padding: 0;
  border-radius: 10px;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1300px) {
    position: relative;
    width: 60%;
    height: 50vh;
  }

  @media (max-width: 800px) {
    width:100%;
margin-bottom: 2rem;
  }
`;

export const IconContainer = styled(FlexibleDiv)`
width:auto;
height:auto;
position:absolute;

`;

// export const ImageCardWrapper = styled(FlexibleDiv)``;
