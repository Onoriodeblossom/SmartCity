import styled from "styled-components";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";

export const Card = styled(FlexibleDiv)`
  background: ${({ active }) =>
    active
      ? "linear-gradient(270deg, #2131C2 0%, #101861 102.99%);"
      : "transparent"};
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 9px;
  padding: 0.5rem 0.5rem;
  width: auto;
  position: relative;
  justify-content: center;
  min-width: 130px;
  .checkIcon {
    position: absolute;
    top: 5%;
    right: 10%;
  }

  @media (max-width: 1000px) {
    width: 45%;
    margin-bottom: 1rem;
  }
  @media (max-width: 900px) {
    width: 30%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const CardText = styled.p`
  color: ${({ active }) => (active ? "#fff" : "#808080")};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0;
`;
