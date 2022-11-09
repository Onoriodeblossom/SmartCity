import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const PriceCardWrapper = styled(FlexibleDiv)`
  background: #2131c2;
  border-radius: 5px;
  width: 30%;
  padding: 1rem 2rem;
  @media (max-width: 1300px) {
    width: 37%;
    padding: 1rem 1rem;
  }
  @media (max-width: 870px) {
    width: 38%;
    padding: 1rem 1rem;
  }
  @media (max-width: 800px) {
    width:100%;
  }
`;

export const HeaderSection = styled(FlexibleDiv)`
  border-radius: 5px;
  padding: 0;
  justify-content: center;
`;
export const BigText = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  padding-right: 0.4rem;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
    padding-right: 0.2rem;
  }
`;
export const SmallText = styled.p`
  color: #fff;
  font-size: 1rem;
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;
export const HorizontalCardSection = styled(FlexibleDiv)``;
export const HorizontalCard = styled(FlexibleDiv)`
  background: #fff;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 0.7rem 0.8rem;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;
export const Circle = styled(FlexibleDiv)`
  background: #f28e13;
  border-radius: 50%;
  height: 5vh;
  width: 5vh;
  padding: 0;
  margin-right: 0.5rem;

  @media (max-width: 1000px) {
    height: 4vh;
    width: 4vh;
  }
  @media (max-width: 870px) {
    height: 2.5vh;
    width: 2.5vh;
  }
  @media (max-width: 800px) {
    height: 3vh;
    width: 3vh;
  }
`;
export const HorizontalCardTextWrapper = styled(FlexibleDiv)`
  border-radius: 5px;
  padding: 0;
  width: auto;
`;
export const HorizontalCardText = styled.p`
  color: #808080;
  font-size: 1rem;
  padding: 0;
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
