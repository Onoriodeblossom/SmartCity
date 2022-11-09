import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const InputSectionWrapper = styled(FlexibleDiv)`
  padding: 1rem 1.6rem;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: 0.4s ease-in-out;
  background: transparent;

  @media (max-width: 1300px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const HeaderText = styled.h2`
  color: #000;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0;
`;

export const FormWrapper = styled.form`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled(FlexibleDiv)`
  margin-right: 1rem;

  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0px;
  }
`;
export const ButtonWrapper = styled(FlexibleDiv)`
  @media (max-width: 1300px) {
  }
  @media (max-width: 1100px) {
    width: 100%;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
