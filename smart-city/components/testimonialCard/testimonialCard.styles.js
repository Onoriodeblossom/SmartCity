import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const TestimonialCardWrapper = styled(FlexibleDiv)`
  width: 28%;
 
  height: auto;
  padding: 1rem 1.6rem;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: 0.4s ease-in-out;
  background: transparent;
  :hover {
    border: 2px solid #2131c2;
  }

  @media (max-width: 1300px) {
    width: 33%;
  }
  @media (max-width: 800px) {
     min-width:45%;
  }
  @media (max-width: 600px) {
     min-width:100%;
  }
`;

export const QuoteIconWrapper = styled(FlexibleDiv)`
  padding: 0;
  justify-content: flex-start;
  position: relative;
  left: -6%;

  @media (max-width: 1300px) {
    left: -8%;
  }
  @media (max-width: 800px) {
    left: 0;
  }
  @media (max-width: 600px) {
    left: 0;
  }
`;

export const Testimonial = styled.p`
  color: #000;
  font-size: 0.9rem;
  padding: 0;
`;

export const UserDetailsWrapper = styled(FlexibleDiv)`
  padding: 0;
  padding-top: 0.5rem;
  justify-content: flex-start;
  @media (max-width: 1300px) {
    left: -8%;
  }
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled(FlexibleDiv)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-right: 0.5rem;
`;
export const Name = styled.p`
  color: #000;
  font-size: 0.9rem;
  padding: 0;
`;

// export const ImageCardWrapper = styled(FlexibleDiv)``;
